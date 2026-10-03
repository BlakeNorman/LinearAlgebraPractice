import pytest
from fastapi.testclient import TestClient

from backend.main import app

from backend.data.create_tables import create_tables
from backend.models.attempts import AttemptCreate
from backend.data import attempts
from backend.data import topics
import backend.data.questions as questions_data

client = TestClient(app)

@pytest.fixture
def test_db(tmp_path, monkeypatch):
    db_path = tmp_path / "test.db"
    monkeypatch.setenv("LINEAR_ALGEBRA_QUIZ_DB", str(db_path))
    create_tables()
    return db_path

def test_sync_questions(test_db):
    topics.create_topic("Subspaces")
    topics.create_topic("Linear Transformations")
    resp = client.post(
        "/questions/sync",
        json=[
            {"id": 1, "topic": "Subspaces"},
            {"id": 2, "topic": "Subspaces"},
            {"id": 101, "topic": "Linear Transformations"}
        ]
    )
    assert resp.status_code == 200
    assert resp.json() == [
        {"id": 1, "topic_id": 1},
        {"id": 2, "topic_id": 1},
        {"id": 101, "topic_id": 2}
    ]

def test_get_one_question(test_db):
    topic = topics.create_topic("Subspaces")
    question = questions_data.sync_question(1, topic.id)
    resp = client.get(f"/questions/{question.id}")
    assert resp.status_code == 200
    assert resp.json() == {
        "id": question.id,
        "topic_id": topic.id
    }

def test_get_all_questions_one_topic(test_db):
    topic = topics.create_topic("Subspaces")
    questions_data.sync_question(1, topic.id)
    questions_data.sync_question(2, topic.id)
    resp = client.get("/questions")
    assert resp.status_code == 200
    assert resp.json() == [
        {"id": 1, "topic_id": topic.id},
        {"id": 2, "topic_id": topic.id}
    ]

def test_get_all_questions_multiple_topics(test_db):
    topic_1 = topics.create_topic("Subspaces")
    topic_2 = topics.create_topic("Linear Transformations")
    questions_data.sync_question(1, topic_1.id)
    questions_data.sync_question(2, topic_2.id)
    resp = client.get("/questions")
    assert resp.status_code == 200
    assert resp.json() == [
        {"id": 1, "topic_id": topic_1.id},
        {"id": 2, "topic_id": topic_2.id}
    ]

def test_get_questions_by_topic(test_db):
    topic_1 = topics.create_topic("Subspaces")
    topic_2 = topics.create_topic("Linear Transformations")
    questions_data.sync_question(1, topic_1.id)
    questions_data.sync_question(2, topic_2.id)
    resp = client.get(f"/questions/topic/{topic_1.id}")
    assert resp.status_code == 200
    assert resp.json() == [{
        "id": 1, "topic_id": topic_1.id
    }]

def test_delete_question(test_db):
    topic = topics.create_topic("Subspaces")
    question = questions_data.sync_question(1, topic.id)
    resp = client.delete(f"/questions/{question.id}")
    assert resp.status_code == 200
    assert resp.json() is None