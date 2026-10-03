from fastapi import APIRouter, HTTPException, Depends

from backend.models.errors import Missing
from backend.models.attempts import Attempt, AttemptCreate
from backend.models.user import User

import backend.service.attempts as attempts_service
from backend.web.user import get_current_user

router = APIRouter(prefix="/attempts")

@router.get("/")
def get_all_attempts(user: User = Depends(get_current_user)) -> list[Attempt]: 
    return attempts_service.get_all_attempts(user.id)

@router.get("/question/{question_id}/count-correct-attempts")
def count_correct_attempts_by_question(
    question_id: int, 
    user: User = Depends(get_current_user)
) -> int:
    return attempts_service.count_correct_attempts_by_question(user.id, question_id)

@router.get("/question/{question_id}/count-attempts")
def count_attempts_by_question(
    question_id: int,
    user: User = Depends(get_current_user)
) -> int:
    return attempts_service.count_attempts_by_question(user.id, question_id)

@router.get("/question/{question_id}")
def get_attempts_by_question(
    question_id: int,
    user: User = Depends(get_current_user)
) -> list[Attempt]:
    return attempts_service.get_attempts_by_question(user.id, question_id)

@router.get("/{attempt_id}")
def get_one_attempt(
    attempt_id: int, 
    user: User = Depends(get_current_user)
) -> Attempt:
    try:
        return attempts_service.get_one_attempt(user.id, attempt_id)
    except Missing as exc:
        raise HTTPException(status_code=404, detail=exc.msg)

@router.post("/")
def create_attempt(
    attempt: AttemptCreate,
    user: User = Depends(get_current_user)
) -> Attempt:
    return attempts_service.create_attempt(user.id, attempt)

@router.delete("/{attempt_id}")
def delete_attempt(
    attempt_id: int,
    user: User = Depends(get_current_user)
) -> None:
    try:
        attempts_service.delete_attempt(user.id, attempt_id)
    except Missing as exc:
        raise HTTPException(status_code=404, detail=exc.msg)