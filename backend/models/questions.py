from pydantic import BaseModel

class Question(BaseModel):
    id: int
    topic_id: int

class QuestionSync(BaseModel):
    id: int
    topic: str