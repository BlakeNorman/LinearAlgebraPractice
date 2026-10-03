from pydantic import BaseModel

class User(BaseModel):
    id: int
    name: str
    password_hash: str

class UserCreate(BaseModel):
    name: str
    password: str

class PasswordUpdate(BaseModel):
    current_password: str
    new_password: str

class PasswordConfirmation(BaseModel):
    password: str