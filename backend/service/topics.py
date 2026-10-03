import backend.data.topics as topics_data
import backend.service.questions as questions_service
import backend.service.attempts as attempts_service

from backend.models.topics import Topic

def get_one_topic(topic_id: int) -> Topic:
    return topics_data.get_one_topic(topic_id)

def get_all_topics() -> list[Topic]:
    return topics_data.get_all_topics()

def create_topic(topic: str) -> Topic:
    return topics_data.create_topic(topic)

def delete_topic(topic_id: int) -> None:
    return topics_data.delete_topic(topic_id)

def calculate_topic_mastery(user_id: int, topic_id: int) -> int:
    questions = questions_service.get_questions_by_topic(topic_id)
    if not questions:
        return 0
    attempts = []
    for question in questions:
        question_attempts = attempts_service.get_attempts_by_question(user_id, question.id)
        for attempt in question_attempts:
            attempts.append(attempt)
    attempts.sort(key=lambda attempt: attempt.answered_at)
    correct_streak = 0
    incorrect_streak = 0
    mastery = 0
    for attempt in attempts:
        if attempt.correct:
            correct_streak = min(5, correct_streak + 1)
            mastery += correct_streak
            incorrect_streak = max(0, incorrect_streak - 1)
        else:
            incorrect_streak = min(5,incorrect_streak + 1)
            mastery -= 2*incorrect_streak
            correct_streak = max(0, correct_streak - 1)
            mastery = max(0, mastery)
    return max(0, min(100, mastery))


