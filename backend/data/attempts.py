from backend.data.init import get_db

from backend.models.attempts import Attempt, AttemptCreate
from backend.models.errors import Missing

from datetime import datetime, timezone

def row_to_model(row: tuple) -> Attempt:
    return Attempt(
        id=row[0],
        user_id=row[1],
        question_id=row[2],
        correct=row[3],
        answered_at=row[4]
    )

def get_one_attempt(user_id: int, attempt_id: int) -> Attempt:
    qry = """
        SELECT * FROM attempts
        WHERE user_id=:user_id
        AND id=:attempt_id
    """
    params = {
        "user_id": user_id,
        "attempt_id": attempt_id
    }
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        row = curs.fetchone()
    if row:
        return row_to_model(row)
    raise Missing("Attempt does not exist")

def get_all_attempts(user_id: int) -> list[Attempt]: 
    qry = """
        SELECT * FROM attempts
        WHERE user_id=:user_id
        ORDER BY id
    """
    params = {"user_id": user_id}
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        rows = curs.fetchall()
    return [row_to_model(row) for row in rows]

def get_attempts_by_question(user_id: int, question_id: int) -> list[Attempt]:
    qry = """
        SELECT * FROM attempts
        WHERE user_id=:user_id
        AND question_id=:question_id
        ORDER BY id
    """
    params = {
        "user_id": user_id,
        "question_id": question_id
    }
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        rows = curs.fetchall()
    return [row_to_model(row) for row in rows]

def create_attempt(user_id: int, attempt: AttemptCreate) -> Attempt:
    qry = """
        INSERT INTO attempts(
            user_id,
            question_id,
            correct,
            answered_at
        )
        VALUES(
            :user_id,
            :question_id,
            :correct,
            :answered_at
        )
    """
    params = {
        "user_id": user_id,
        "question_id": attempt.question_id,
        "correct": attempt.correct,
        "answered_at": datetime.now(timezone.utc).isoformat()
    }
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        attempt_id = curs.lastrowid
    return get_one_attempt(user_id, attempt_id)

def delete_attempt(user_id: int, attempt_id: int) -> None:
    qry = """
        DELETE FROM attempts
        WHERE user_id=:user_id
        AND id=:attempt_id
    """
    params = {
        "user_id": user_id,
        "attempt_id": attempt_id
    }
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        if curs.rowcount == 0:
            raise Missing("Attempt does not exist") 

def delete_attempts_by_topic(user_id: int, topic_id: int) -> None:
    qry = """
        DELETE FROM attempts
        WHERE user_id=:user_id
        AND question_id IN (
            SELECT id FROM questions
            WHERE topic_id=:topic_id
        )
    """
    params = {
        "user_id": user_id,
        "topic_id": topic_id
    }
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
    
