import backend.data.questions as questions_data
import backend.data.topics as topics_data

from backend.models.questions import Question, QuestionSync

def get_one_question(question_id: int) -> Question:
    return questions_data.get_one_question(question_id)

def get_all_questions() -> list[Question]:
    return questions_data.get_all_questions()

def get_questions_by_topic(topic_id: int) -> list[Question]:
    return questions_data.get_questions_by_topic(topic_id)

def delete_question(question_id: int) -> None:
    return questions_data.delete_question(question_id)

def sync_questions(questions: list[QuestionSync]) -> list[Question]:
    synced_questions = []
    for question in questions:
        topic_name = question.topic
        topic = topics_data.get_topic_by_name(topic_name)
        question = questions_data.sync_question(question.id, topic.id)
        synced_questions.append(question)
    return synced_questions

