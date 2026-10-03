from backend.data.init import get_db

from backend.models.questions import Question
from backend.models.errors import Missing, Duplicate

from sqlite3 import IntegrityError

def row_to_model(row: tuple) -> Question:
    return Question(
        id=row[0],
        topic_id=row[1]
    )

def get_one_question(id: int) -> Question:
    qry = """
        SELECT
            id,
            topic_id
        FROM questions
        WHERE id=:id
    """
    params = {
        "id": id
    }
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        row = curs.fetchone()
        if row:
            return row_to_model(row)
        raise Missing("Question does not exist")

def get_all_questions() -> list[Question]:
    qry = """
        SELECT * FROM questions
        ORDER BY id
    """
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry)
        rows = curs.fetchall()
    return [row_to_model(row) for row in rows]

def get_questions_by_topic(topic_id: int) -> list[Question]:
    qry = """
        SELECT * FROM questions
        WHERE topic_id=:topic_id
        ORDER BY id
    """
    params = {
        "topic_id": topic_id
    }
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        rows = curs.fetchall()
    return [row_to_model(row) for row in rows]

def sync_question(question_id: int, topic_id: int) -> Question:
    qry = """
        INSERT INTO questions(
            id,
            topic_id
        )
        VALUES(
            :question_id,
            :topic_id
        )
        ON CONFLICT(id) DO UPDATE SET
            topic_id = excluded.topic_id
    """
    params = {
        "question_id": question_id,
        "topic_id": topic_id
    }
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        conn.commit()
    return get_one_question(question_id)        

def delete_question(id: int) -> None:
    qry = """
        DELETE FROM questions
        WHERE id=:id
    """
    params = {
        "id": id
    }
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        if curs.rowcount == 0:
            raise Missing("Question does not exist")
        conn.commit()

