from backend.data.init import get_db

from backend.models.topics import Topic
from backend.models.errors import Missing, Duplicate

from sqlite3 import IntegrityError

def row_to_model(row) -> Topic:
    return Topic(
        id=row[0],
        topic=row[1]
    )

def get_one_topic(topic_id: int) -> Topic:
    qry = """
        SELECT 
            id,
            topic
        FROM topics
        WHERE id=:topic_id        
    """
    params = {"topic_id": topic_id}
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        row = curs.fetchone()
    if row:
        return row_to_model(row)
    raise Missing(f"Topic does not exist")

def get_all_topics() -> list[Topic]:
    qry = """
        SELECT * FROM topics
        ORDER BY id
    """
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry)
        rows = curs.fetchall()
    return [row_to_model(row) for row in rows]

def get_topic_by_name(topic: str) -> Topic:
    qry = """
        SELECT * FROM topics
        WHERE topic=:topic
    """
    params = {
        "topic": topic
    }
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        row = curs.fetchone()
    if row:
        return row_to_model(row)
    raise Missing(f"Topic {topic} does not exist")

def create_topic(topic: str) -> Topic:
    qry = """
        INSERT INTO topics(
            topic
        )
        VALUES(
            :topic
        )
    """
    params = {"topic": topic}
    try:
        with get_db() as conn:
            curs = conn.cursor()
            curs.execute(qry, params)
            conn.commit()
            id = curs.lastrowid
    except IntegrityError:
        raise Duplicate(f"Topic {topic} already exists")
    return get_one_topic(id)

def delete_topic(topic_id: int) -> None:
    qry = """
        DELETE FROM topics
        WHERE id=:topic_id
    """
    params = {"topic_id": topic_id}
    with get_db() as conn:
        curs = conn.cursor()
        curs.execute(qry, params)
        if curs.rowcount == 0:
            raise Missing(f"Topic does not exist")
        conn.commit()
