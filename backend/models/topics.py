from pydantic import BaseModel

class Topic(BaseModel):
    id: int
    topic: str

class TopicCreate(BaseModel):
    topic: str