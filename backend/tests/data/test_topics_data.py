import pytest

from backend.data.create_tables import create_tables
from backend.models.errors import Missing, Duplicate
from backend.data import topics

@pytest.fixture
def test_db(tmp_path, monkeypatch):
    db_path = tmp_path / "test.db"
    monkeypatch.setenv("LINEAR_ALGEBRA_QUIZ_DB", str(db_path))
    create_tables()
    return db_path

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
    assert len(resp) == 2
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