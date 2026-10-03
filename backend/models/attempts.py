from pydantic import BaseModel
from datetime import datetime

class Attempt(BaseModel):
    id: int
    user_id: int
    question_id: int
    correct: bool
    answered_at: datetime

class AttemptCreate(BaseModel):
    question_id: int
    correct: bool
    