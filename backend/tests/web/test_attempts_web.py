import pytest
from fastapi.testclient import TestClient

from backend.main import app

from backend.data.create_tables import create_tables
from backend.models.user import UserCreate
from backend.models.attempts import AttemptCreate
from backend.data import attempts
from backend.data import user, topics, questions
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

def test_create_attempt_correct(test_db, authenticated_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    resp = client.post(
        "/attempts/", 
        json={
            "question_id": question.id,
            "correct": True
        }
    )
    assert resp.status_code == 200
    assert resp.json()["id"] == 1
    assert resp.json()["user_id"] == authenticated_user.id
    assert resp.json()["question_id"] == question.id
    assert resp.json()["correct"] is True
    assert resp.json()["answered_at"] is not None

def test_create_attempt_incorrect(test_db, authenticated_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    resp = client.post(
        "/attempts/", 
        json={
            "question_id": question.id,
            "correct": False
        }
    )
    assert resp.status_code == 200
    assert resp.json()["id"] == 1
    assert resp.json()["user_id"] == authenticated_user.id
    assert resp.json()["question_id"] == question.id
    assert resp.json()["correct"] is False
    assert resp.json()["answered_at"] is not None

def test_get_one_attempt(test_db, authenticated_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    attempt = attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    resp = client.get(f"/attempts/{attempt.id}")
    assert resp.status_code == 200
    assert resp.json()["id"] == 1
    assert resp.json()["user_id"] == authenticated_user.id
    assert resp.json()["question_id"] == question.id
    assert resp.json()["correct"] is True
    assert resp.json()["answered_at"] is not None

def test_get_one_attempt_missing(test_db, authenticated_user):
    resp = client.get("/attempts/1")
    assert resp.status_code == 404

def test_get_all_attempts_one_question(test_db, authenticated_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    resp = client.get("/attempts/")
    assert resp.status_code == 200
    assert len(resp.json()) == 2
    assert resp.json()[0]["id"] == 1
    assert resp.json()[0]["user_id"] == authenticated_user.id
    assert resp.json()[0]["question_id"] == question.id
    assert resp.json()[0]["correct"] is True
    assert resp.json()[0]["answered_at"] is not None
    assert resp.json()[1]["id"] == 2
    assert resp.json()[1]["user_id"] == authenticated_user.id
    assert resp.json()[1]["question_id"] == question.id
    assert resp.json()[1]["correct"] is True
    assert resp.json()[1]["answered_at"] is not None

def test_get_all_attempts_multiple_questions(test_db, authenticated_user):
    topic = topics.create_topic("Subspaces")
    question_1 = questions.sync_question(1, topic.id)
    question_2 = questions.sync_question(2, topic.id)
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question_1.id, correct=True)
    )
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question_2.id, correct=True)
    )
    resp = client.get("/attempts/")
    assert resp.status_code == 200
    assert len(resp.json()) == 2
    assert resp.json()[0]["id"] == 1
    assert resp.json()[0]["user_id"] == authenticated_user.id
    assert resp.json()[0]["question_id"] == question_1.id
    assert resp.json()[0]["correct"] is True
    assert resp.json()[0]["answered_at"] is not None
    assert resp.json()[1]["id"] == 2
    assert resp.json()[1]["user_id"] == authenticated_user.id
    assert resp.json()[1]["question_id"] == question_2.id
    assert resp.json()[1]["correct"] is True
    assert resp.json()[1]["answered_at"] is not None

def test_delete_attempt(test_db, authenticated_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    attempt = attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    resp = client.delete(f"/attempts/{attempt.id}")
    assert resp.status_code == 200
    assert resp.json() is None

def test_delete_attempt_missing(test_db, authenticated_user):
    resp = client.delete("/attempts/1")
    assert resp.status_code == 404

def test_count_attempts_by_question(test_db, authenticated_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question.id, correct=False)
    )
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question.id, correct=False)
    )
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    resp = client.get(f"/attempts/question/{question.id}/count-attempts")
    assert resp.status_code == 200
    assert resp.json() == 3

def test_count_correct_attempts_by_question(test_db, authenticated_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question.id, correct=False)
    )
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question.id, correct=False)
    )
    attempts.create_attempt(
        authenticated_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    resp = client.get(f"/attempts/question/{question.id}/count-correct-attempts")
    assert resp.status_code == 200
    assert resp.json() == 1