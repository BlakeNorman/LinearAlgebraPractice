from backend.models.user import User, UserCreate
from backend.models.errors import Missing
import backend.data.user as user_data

from datetime import timedelta, datetime, timezone
from jose import jwt, JWTError
from passlib.context import CryptContext
import os
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.environ["SECRET_KEY"]
ALGORITHM = "HS256"
password_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Hash plain and compare with hash from database
def verify_password(plain: str, hash: str) -> bool:
    return password_context.verify(plain, hash)

# Hash a plain string
def get_hash(plain: str) -> str:
    return password_context.hash(plain)

def get_jwt_user_id(token: str) -> int | None:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")
        if user_id is None:
            return None
        return int(user_id)
    except (JWTError, ValueError):
        return None

def lookup_user(user_id: int) -> User | None:
    try:
        return user_data.get_one(user_id)
    except Missing:
        return None

def get_current_user(token: str) -> User | None:
    user_id = get_jwt_user_id(token)
    if user_id is None:
        return None
    return lookup_user(user_id)

# Authenticate user
def auth_user(user_name: str, plain: str) -> User | None:
    try:
        user_id = user_data.get_user_id_by_name(user_name)
    except Missing:
        return None   
    user = lookup_user(user_id)
    if user is None:
        return None
    if not verify_password(plain, user.password_hash):
        return None
    return user

def create_access_token(payload: dict, expires: timedelta | None = None):
    claims = payload.copy()
    now = datetime.now(timezone.utc)
    if not expires:
        expires = timedelta(minutes=15)
    claims.update({"exp": now + expires})
    encoded_jwt = jwt.encode(claims, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def register_user(user: UserCreate) -> User:
    hashed = get_hash(user.password)
    return user_data.create(user, hashed)

def modify_password(new_password: str, user: User) -> User:
    new_password_hash = get_hash(new_password)
    return user_data.modify_password(new_password_hash, user)

###########################################################
# Passthrough stuff
###########################################################

def get_all() -> list[User]:
    return user_data.get_all()

def get_one(user_id: int) -> User:
    return user_data.get_one(user_id)

def delete(user_id: int) -> None:
    return user_data.delete(user_id)