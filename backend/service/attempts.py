import backend.data.attempts as attempts_data

from backend.models.attempts import Attempt, AttemptCreate

def get_one_attempt(user_id: int, attempt_id: int) -> Attempt:
    return attempts_data.get_one_attempt(user_id, attempt_id)

def get_all_attempts(user_id: int) -> list[Attempt]:
    return attempts_data.get_all_attempts(user_id)

def get_attempts_by_question(user_id: int, question_id: int) -> list[Attempt]:
    return attempts_data.get_attempts_by_question(user_id, question_id)

def create_attempt(user_id: int, attempt: AttemptCreate) -> Attempt:
    return attempts_data.create_attempt(user_id, attempt)

def delete_attempt(user_id: int, attempt_id: int) -> None:
    return attempts_data.delete_attempt(user_id, attempt_id)

def delete_attempts_by_topic(user_id: int, topic_id: int) -> None:
    return attempts_data.delete_attempts_by_topic(user_id, topic_id)

def count_attempts_by_question(user_id: int, question_id: int) -> int:
    return len(get_attempts_by_question(user_id, question_id))

def count_correct_attempts_by_question(user_id: int, question_id: int) -> int:
    attempts = get_attempts_by_question(user_id, question_id)
    return sum(attempt.correct for attempt in attempts)