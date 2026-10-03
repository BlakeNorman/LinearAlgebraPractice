import pytest

from backend.data.create_tables import create_tables
from backend.models.errors import Missing
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

def test_create_attempt_correct(test_db, fake_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    resp = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    assert resp.id is not None
    assert resp.question_id == question.id
    assert resp.correct is True

def test_create_attempt_incorrect(test_db, fake_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    resp = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=False)
    )
    assert resp.id is not None
    assert resp.question_id == question.id
    assert resp.correct is False

def test_get_one_attempt(test_db, fake_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    attempt = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    resp = attempts.get_one_attempt(fake_user.id, attempt.id)
    assert resp.id == attempt.id
    assert resp.question_id == question.id
    assert resp.correct is True

def test_get_one_attempt_missing(test_db, fake_user):
    with pytest.raises(Missing):
        attempts.get_one_attempt(fake_user.id, 1)

def test_get_all_attempts_one_question(test_db, fake_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    attempt_1 = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    attempt_2 = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    resp = attempts.get_all_attempts(fake_user.id)
    assert len(resp) == 2
    assert resp[0].id == attempt_1.id
    assert resp[0].question_id == question.id
    assert resp[0].correct is True
    assert resp[1].id == attempt_2.id
    assert resp[1].question_id == question.id
    assert resp[1].correct is True

def test_get_all_attempts_multiple_questions(test_db, fake_user):
    topic = topics.create_topic("Subspaces")
    question_1 = questions.sync_question(1, topic.id)
    question_2 = questions.sync_question(2, topic.id)
    attempt_1 = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question_1.id, correct=True)
    )
    attempt_2 = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question_2.id, correct=True)
    )
    resp = attempts.get_all_attempts(fake_user.id)
    assert len(resp) == 2
    assert resp[0].id == attempt_1.id
    assert resp[0].question_id == question_1.id
    assert resp[0].correct is True
    assert resp[1].id == attempt_2.id
    assert resp[1].question_id == question_2.id
    assert resp[1].correct is True

def test_create_attempt_correct_and_incorrect(test_db, fake_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    attempt_1 = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=False)
    )
    attempt_2 = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    resp = attempts.get_all_attempts(fake_user.id)
    assert len(resp) == 2
    assert resp[0].id == attempt_1.id
    assert resp[0].correct is False
    assert resp[1].id == attempt_2.id
    assert resp[1].correct is True

def test_delete_attempt(test_db, fake_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    attempt = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    resp = attempts.delete_attempt(fake_user.id, attempt.id)
    assert resp is None
    with pytest.raises(Missing):
        attempts.get_one_attempt(fake_user.id, attempt.id)

def test_count_attempts_by_question(test_db, fake_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    attempt_1 = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=False)
    )
    attempt_2 = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=False)
    )
    attempt_3 = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    resp = attempts.count_attempts_by_question(fake_user.id, question.id)
    assert resp == 3

def test_count_correct_attempts_by_question(test_db, fake_user):
    topic = topics.create_topic("Subspaces")
    question = questions.sync_question(1, topic.id)
    attempt_1 = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=False)
    )
    attempt_2 = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=False)
    )
    attempt_3 = attempts.create_attempt(
        fake_user.id,
        AttemptCreate(question_id=question.id, correct=True)
    )
    resp = attempts.count_correct_attempts_by_question(fake_user.id, question.id)
    assert resp == 1
