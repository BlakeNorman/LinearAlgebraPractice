from fastapi import APIRouter, HTTPException, Depends

from backend.models.topics import Topic, TopicCreate
from backend.models.errors import Duplicate, Missing
from backend.models.user import User

import backend.service.topics as topics_service
import backend.service.attempts as attempts_service
from backend.web.user import get_current_user

router = APIRouter(prefix="/topics")

@router.get("/")
def get_all_topics() -> list[Topic]:
    return topics_service.get_all_topics()

@router.get("/{topic_id}/mastery")
def calculate_topic_mastery(
    topic_id: int, 
    user: User = Depends(get_current_user)
)-> int:
    return topics_service.calculate_topic_mastery(user.id, topic_id)

@router.get("/{topic_id}")
def get_one_topic(topic_id: int) -> Topic:
    try:
        return topics_service.get_one_topic(topic_id)
    except Missing as exc:
        raise HTTPException(status_code=404, detail=exc.msg)

@router.post("/")
def create_topic(topic: TopicCreate) -> Topic:
    try:
        return topics_service.create_topic(topic.topic)
    except Duplicate as exc:
        raise HTTPException(status_code=409, detail=exc.msg)

@router.delete("/{topic_id}/reset-mastery")
def reset_mastery(
    topic_id: int, 
    user: User = Depends(get_current_user)
) -> None:
    return attempts_service.delete_attempts_by_topic(user.id, topic_id)

@router.delete("/{topic_id}")
def delete_topic(topic_id: int) -> None:
    try:
        topics_service.delete_topic(topic_id)
    except Missing as exc:
        raise HTTPException(status_code=404, detail=exc.msg)