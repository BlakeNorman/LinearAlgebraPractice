import pytest
from fastapi.testclient import TestClient

from backend.main import app

from backend.models.user import UserCreate
from backend.models.attempts import AttemptCreate
from backend.data.create_tables import create_tables
from backend.data import user, attempts, questions, topics
from backend.web.user import get_current_user

client = TestClient(app)

@pytest.fixture
def test_db(tmp_path, monkeypatch):
    db_path = tmp_path / "test.db"
    monkeypatch.setenv("LINEAR_ALGEBRA_QUIZ_DB", str(db_path))
    create_tables()
    return db_path

@pytest.fixture
def fake_user(test_db):
    fake_user_create = UserCreate(name="test_user", password="fake_password")
    test_user = user.create(fake_user_create, "fake_password_hash")    
    return test_user

@pytest.fixture
def authenticated_user(fake_user):
    app.dependency_overrides[get_current_user] = lambda: fake_user
    yield fake_user
    app.dependency_overrides.clear()

def test_create_topic(test_db):
    resp = client.post("/topics/", json={"topic": "Subspaces"})
    assert resp.status_code == 200
    assert resp.json() == {
        "id": 1,
        "topic": "Subspaces"
    }

def test_create_duplicate_topic(test_db):
    client.post("/topics/", json={"topic": "Subspaces"})
    resp = client.post("/topics/", json={"topic": "Subspaces"})
    assert resp.status_code == 409

def test_get_one_topic(test_db):
    topic = topics.create_topic("Subspaces")
    resp = client.get(f"/topics/{topic.id}")
    assert resp.status_code == 200
    assert resp.json() == {"id": topic.id, "topic": "Subspaces"}

def test_get_one_topic_missing(test_db):
    resp = client.get("/topics/1")
    assert resp.status_code == 404

def test_get_all_topics(test_db):
    topic_1 = topics.create_topic("Subspaces")
    topic_2 = topics.create_topic("Linear Transformations")
    resp = client.get("/topics/")
    assert resp.status_code == 200
    assert resp.json() == [
        {"id": topic_1.id, "topic": "Subspaces"},
        {"id": topic_2.id, "topic": "Linear Transformations"}
    ]

def test_delete_topic(test_db):
    topic = topics.create_topic("Subspaces")
    resp = client.delete(f"/topics/{topic.id}")
    assert resp.status_code == 200
    assert resp.json() is None

def test_calculate_topic_mastery_no_questions(test_db, authenticated_user):
    topic = topics.create_topic("Subspaces")
    resp = client.get(f"/topics/{topic.id}/mastery")
    assert resp.status_code == 200
    assert resp.json() == 0.0

def test_calculate_topic_mastery(test_db, authenticated_user):
    topic = topics.create_topic("Subspaces")
    question_1 = questions.sync_question(1, topic.id)
    question_2 = questions.sync_question(2, topic.id)
    question_3 = questions.sync_question(3, topic.id)
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question_1.id, correct=True)
    )
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question_2.id, correct=False)
    )
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question_2.id, correct=True)
    )
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question_3.id, correct=True)
    )
    resp = client.get(f"/topics/{topic.id}/mastery")
    assert resp.status_code == 200
    assert resp.json() == 3

def test_reset_topic_matery(test_db, authenticated_user):
    topic = topics.create_topic("Subspaces")
    question_1 = questions.sync_question(1, topic.id)
    question_2 = questions.sync_question(2, topic.id)
    question_3 = questions.sync_question(3, topic.id)
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question_1.id, correct=True)
    )
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question_2.id, correct=False)
    )
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question_2.id, correct=True)
    )
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question_3.id, correct=True)
    )
    mastery_before = client.get(f"/topics/{topic.id}/mastery")
    resp_mastery_reset = client.delete(f"/topics/{topic.id}/reset-mastery")
    mastery_after = client.get(f"/topics/{topic.id}/mastery")
    assert mastery_before.status_code == 200
    assert mastery_before.json() == 3
    assert resp_mastery_reset.status_code == 200
    assert resp_mastery_reset.json() is None
    assert mastery_after.status_code == 200
    assert mastery_after.json() == 0