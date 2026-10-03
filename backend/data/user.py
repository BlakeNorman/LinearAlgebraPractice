from backend.models.user import User, UserCreate
from backend.models.errors import Missing, Duplicate
from backend.data.init import get_db

from sqlite3 import IntegrityError
from datetime import datetime

def row_to_model(row: tuple) -> User:
    return User(
        id=row[0],
        name=row[1],
        password_hash=row[2]
    )

def get_one(user_id: int) -> User:
    qry = """
        SELECT * FROM user WHERE id=:user_id
    """
    params = {"user_id": user_id}
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        row = curs.fetchone()
    if row:
        return row_to_model(row)
    else:
        raise Missing(msg=f"User {user_id} not found")

def get_user_id_by_name(user_name: str) -> int:
    qry = """
        SELECT id FROM user
        WHERE name=:user_name
    """
    params = {"user_name": user_name}
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        row = curs.fetchone()
    if row:
        return row[0]
    raise Missing(f"User {user_name} not found") 

def get_all() -> list[User]:
    qry = """
        SELECT * FROM user
    """
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry)
        rows = curs.fetchall()
    return [row_to_model(row) for row in rows]

def create(user: UserCreate, password_hash: str) -> User:
    qry = """
        INSERT INTO user(
            name,
            password_hash
        ) 
        VALUES( 
            :name, 
            :password_hash
        )
    """
    params = {
        "name": user.name,
        "password_hash": password_hash
    }
    try:
        with get_db() as conn:
            curs = conn.cursor()
            curs.execute(qry, params)
            user_id = curs.lastrowid
    except IntegrityError:
        raise Duplicate(msg=f"Username already exists")
    return get_one(user_id)

def modify_password(new_password_hash: str, user: User) -> User:
    qry = """
        UPDATE user
        SET
            password_hash=:new_password_hash
        WHERE id=:id 
    """
    params = {
        "id": user.id,
        "new_password_hash": new_password_hash
    }
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
    if curs.rowcount == 1:
        return get_one(user.id)
    else:
        raise Missing(msg=f"User {user.id} not found")

def delete(user_id: int) -> None:
    qry = """
        DELETE FROM user 
        WHERE id=:user_id
    """
    params = {"user_id": user_id}
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        if curs.rowcount != 1:
            raise Missing(msg=f"User {user_id} not found")