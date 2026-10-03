import pytest

from backend.data.create_tables import create_tables
from backend.models.errors import Missing, Duplicate
from backend.models.user import UserCreate
from backend.models.attempts import AttemptCreate
from backend.service import attempts
from backend.service import topics
from backend.data import questions
from backend.data import user

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

def test_create_topic(test_db):
    resp = topics.create_topic("Subspaces")
    assert resp.topic == "Subspaces"
    assert resp.id is not None

def test_create_duplicate_topic(test_db):
    topics.create_topic("Subspaces")
    with pytest.raises(Duplicate):
        topics.create_topic("Subspaces")

def test_get_one_topic(test_db):
    topic = topics.create_topic("Subspaces")
    resp = topics.get_one_topic(topic.id)
    assert resp.topic == "Subspaces"
    assert resp.id == topic.id

def test_get_all_topics(test_db):
    topic_1 = topics.create_topic("Subspaces")
    topic_2 = topics.create_topic("Linear Transformations")
    resp = topics.get_all_topics()
    assert resp[0].topic == topic_1.topic
    assert resp[0].id == topic_1.id
    assert resp[1].topic == topic_2.topic
    assert resp[1].id == topic_2.id

def test_delete_topic(test_db):
    topic = topics.create_topic("Subspaces")
    resp = topics.delete_topic(topic.id)
    assert resp is None
    with pytest.raises(Missing):
        topics.get_one_topic(topic.id)

def test_calculate_topic_mastery_no_questions(test_db, fake_user):
    topic = topics.create_topic("Subspaces")
    resp = topics.calculate_topic_mastery(fake_user.id, topic.id)
    assert resp == 0.0

def test_calculate_topic_mastery(test_db, fake_user):
    topic = topics.create_topic("Subspaces")
    question_1 = questions.sync_question(1, topic.id)
    question_2 = questions.sync_question(2, topic.id)
    question_3 = questions.sync_question(3, topic.id)
    attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question_1.id, correct=True)
    )
    attempts.create_attempt(
            fake_user.id,
            AttemptCreate(question_id=question_2.id, correct=False)
        )
    attempts.create_attempt(
            fake_user.id,
            AttemptCreate(question_id=question_2.id, correct=True)
        )
    attempts.create_attempt(
            fake_user.id,
            AttemptCreate(question_id=question_3.id, correct=True)
        )
    resp = topics.calculate_topic_mastery(fake_user.id, topic.id)
    assert resp == 3