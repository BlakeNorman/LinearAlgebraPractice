from fastapi import APIRouter

import backend.service.questions as questions_service
from backend.models.questions import Question, QuestionSync

router = APIRouter(prefix="/questions")

@router.get("/")
def get_all_questions() -> list[Question]:
    return questions_service.get_all_questions()

@router.get("/{question_id}/mastery")
def calculate_question_mastery(question_id: int) -> float:
    return questions_service.calculate_question_mastery(question_id)

@router.get("/topic/{topic_id}")
def get_questions_by_topic(topic_id: int) -> list[Question]:
    return questions_service.get_questions_by_topic(topic_id)

@router.get("/{question_id}")
def get_one_question(question_id: int) -> Question:
    return questions_service.get_one_question(question_id)

@router.post("/sync")
def sync_questions(questions: list[QuestionSync]) -> list[Question]:
    return questions_service.sync_questions(questions)

@router.delete("/{question_id}")
def delete_question(question_id: int) -> None:
    return questions_service.delete_question(question_id)