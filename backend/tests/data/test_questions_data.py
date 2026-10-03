import pytest

from backend.data.create_tables import create_tables
from backend.models.errors import Missing, Duplicate
from backend.data import questions
from backend.data import topics

@pytest.fixture
def test_db(tmp_path, monkeypatch):
    db_path = tmp_path / "test.db"
    monkeypatch.setenv("LINEAR_ALGEBRA_QUIZ_DB", str(db_path))
    create_tables()
    return db_path

def test_sync_question(test_db):
    topic = topics.create_topic("Subspaces")
    resp = questions.sync_question(1, topic.id)
    assert resp.id == 1
    assert resp.topic_id == topic.id

def test_get_one_question(test_db):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    resp = questions.get_one_question(question.id)
    assert resp.id == question.id
    assert resp.topic_id == question.topic_id

def test_get_all_questions_one_topic(test_db):
    topic = topics.create_topic("Subspaces")
    q1 = questions.sync_question(1, topic.id)
    q2 = questions.sync_question(2, topic.id)
    resp = questions.get_all_questions()
    assert len(resp) == 2
    assert resp[0].id == q1.id
    assert resp[0].topic_id == topic.id
    assert resp[1].id == q2.id
    assert resp[1].topic_id == topic.id

def test_get_all_questions_multiple_topics(test_db):
    topic1 = topics.create_topic("Subspaces")
    topic2 = topics.create_topic("Linear Transformations")
    q1 = questions.sync_question(1, topic1.id)
    q2 = questions.sync_question(2, topic2.id)
    resp = questions.get_all_questions()
    assert len(resp) == 2
    assert resp[0].id == q1.id
    assert resp[0].topic_id == topic1.id
    assert resp[1].id == q2.id
    assert resp[1].topic_id == topic2.id

def test_get_questions_by_topic(test_db):
    topic1 = topics.create_topic("Subspaces")
    topic2 = topics.create_topic("Linear Transformations")
    q1 = questions.sync_question(1, topic1.id)
    q2 = questions.sync_question(2, topic2.id)
    resp = questions.get_questions_by_topic(topic1.id)
    assert len(resp) == 1
    assert resp[0] == q1

def test_delete_question(test_db):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    resp = questions.delete_question(question.id)
    assert resp is None
    with pytest.raises(Missing):
        questions.get_one_question(question.id)