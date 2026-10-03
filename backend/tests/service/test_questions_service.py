import pytest

from backend.data.create_tables import create_tables
from backend.models.errors import Missing
from backend.models.questions import QuestionSync
from backend.service import attempts
from backend.service import questions
from backend.service import topics

import backend.data.questions as questions_data

@pytest.fixture
def test_db(tmp_path, monkeypatch):
    db_path = tmp_path / "test.db"
    monkeypatch.setenv("LINEAR_ALGEBRA_QUIZ_DB", str(db_path))
    create_tables()
    return db_path

def test_sync_questions(test_db):
    topic = topics.create_topic("Subspaces")
    q1 = QuestionSync(id=1, topic=topic.topic)
    q2 = QuestionSync(id=2, topic=topic.topic)
    resp = questions.sync_questions([q1,q2])
    assert len(resp) == 2
    assert resp[0].id == 1
    assert resp[0].topic_id == topic.id
    assert resp[1].id == 2
    assert resp[1].topic_id == topic.id

def test_get_one_question(test_db):
    topic = topics.create_topic("Subspaces")
    question = questions_data.sync_question(1, topic.id)
    resp = questions.get_one_question(question.id)
    assert resp.id == question.id
    assert resp.topic_id == topic.id

def test_get_all_questions_one_topic(test_db):
    topic = topics.create_topic("Subspaces")
    question_1 = questions_data.sync_question(1, topic.id)
    question_2 = questions_data.sync_question(2, topic.id)
    resp = questions.get_all_questions()
    assert resp[0].topic_id == topic.id
    assert resp[0].id == question_1.id
    assert resp[1].topic_id == topic.id
    assert resp[1].id == question_2.id

def test_get_all_questions_multiple_topics(test_db):
    topic_1 = topics.create_topic("Subspaces")
    topic_2 = topics.create_topic("Linear Transformations")
    question_1 = questions_data.sync_question(1, topic_1.id)
    question_2 = questions_data.sync_question(2, topic_2.id)
    resp = questions.get_all_questions()
    assert resp[0].topic_id == topic_1.id
    assert resp[0].id == question_1.id
    assert resp[1].topic_id == topic_2.id
    assert resp[1].id == question_2.id

def test_get_questions_by_topic(test_db):
    topic1 = topics.create_topic("Subspaces")
    topic2 = topics.create_topic("Linear Transformations")
    q1 = questions_data.sync_question(1, topic1.id)
    q2 = questions_data.sync_question(2, topic2.id)
    resp = questions.get_questions_by_topic(topic1.id)
    assert len(resp) == 1
    assert resp[0] == q1

def test_delete_question(test_db):
    topic = topics.create_topic("Subspaces")
    question = questions_data.sync_question(1, topic.id)
    resp = questions.delete_question(question.id)
    assert resp is None
    with pytest.raises(Missing):
        questions.get_one_question(question.id)