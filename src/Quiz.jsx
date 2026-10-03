import { useEffect, useState } from "react";

import { getTopicMastery } from "./api/topics";
import Question from "./QuestionFunctions/SelectQuestionType";
import createAttempt from "./api/attempts";

import { topicIDs } from "./TopicData";

import { subspacesQuestions } from "./Questions/Subspaces";
import { linearTransformationsQuestions } from "./Questions/LinearTransformations";
import { determinantsQuestions } from "./Questions/Determinants";
import { systemsOfLinearEquationsQuestions } from "./Questions/SystemsOfLinearEquations";

const associatedQuestions = {
    "Subspaces": subspacesQuestions,
    "Linear Transformations": linearTransformationsQuestions,
    "Determinants": determinantsQuestions,
    "Systems of Linear Equations": systemsOfLinearEquationsQuestions
};

export default function Quiz({ topics, backToTopicSelection }) {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [mastery, setMastery] = useState({});
    const [usedQuestions, setUsedQuestions] = useState([]);
    const [questionRound, setQuestionRound] = useState(0);

    useEffect(() => {
        async function loadMastery() {
            const masteryData = {};

            for (const topic of topics) {
                const topicID = topicIDs[topic];
                masteryData[topicID] = await getTopicMastery(topicID);
            }

            setMastery(masteryData);
            setLoading(false);

        }

        loadMastery();

    }, [topics]);

    function getActiveTopics(currentMastery) {
        return topics.filter(topic => {
            const topicID = topicIDs[topic];
            return (currentMastery[topicID] ?? 0) < 100;
        });
    }

    function getAvailableQuestions(currentMastery) {
        const activeTopics = getActiveTopics(currentMastery);
        return activeTopics.flatMap(topic => associatedQuestions[topic])
    }

    function chooseNextQuestion(currentMastery, usedQuestionIDs) {
        const availableQuestions = getAvailableQuestions(currentMastery);

        const unusedQuestions = availableQuestions.filter(question =>
            !usedQuestionIDs.includes(question.id)
        );

        if (unusedQuestions.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * unusedQuestions.length);

        return unusedQuestions[randomIndex];
    }

    useEffect(() => {

        if (!loading && currentQuestion === null) {
            const nextQuestion = chooseNextQuestion(mastery, []);
            setCurrentQuestion(nextQuestion);

            if (nextQuestion) {
                setUsedQuestions([nextQuestion.id]);
            }
        }
    }, [loading, mastery, currentQuestion]);

    async function handleQuestionSubmit(correct) {
        setSubmitted(true);

        await createAttempt(currentQuestion, correct);

        const topicID = topicIDs[currentQuestion.topic];

        const newTopicMastery = await getTopicMastery(topicID);

        const newMastery = {
            ...mastery,
            [topicID]: newTopicMastery
        };

        setMastery(newMastery);

    }

    function handleNextQuestion() {
        let nextQuestion = chooseNextQuestion(mastery, usedQuestions);

        if (nextQuestion === null) {

            nextQuestion = chooseNextQuestion(mastery, []);

            if (nextQuestion === null) {
                return;
            }

            setQuestionRound(prev => prev + 1);
            setUsedQuestions([nextQuestion.id]);

        } else {

            setUsedQuestions(prev => [...prev, nextQuestion.id]);

        }

        setCurrentQuestion(nextQuestion);
        setSubmitted(false);
    }

    if (loading) {
        return <p>Loading mastery...</p>;
    }

    const allTopicsMastered = topics.every(topic => {
        const topicID = topicIDs[topic];
        return (mastery[topicID] ?? 0) >= 100;
    });

    if (allTopicsMastered) {
        return (
            <>
                <h1>Quiz Complete</h1>
                <p>You have reached 100% mastery in all selected topics.</p>
                <div>
                    <button className="basic-button" onClick={backToTopicSelection}>
                        Topic Selection
                    </button>
                </div>
            </>
        );
    }

    if (currentQuestion === null) {
        return <p>Loading question...</p>;
    }

    return (
        <div style={{ textAlign: "left" }}>
            <button className="basic-button" onClick={backToTopicSelection}>
                Topic Selection
            </button>
            <div className="mastery-module">
                <h2>Mastery</h2>

                {topics.map(topic => {
                    const topicID = topicIDs[topic];

                    return (
                        <p key={topicID}>
                            {topic}: {mastery[topicID] ?? 0.0}%
                        </p>
                    );
                })}
            </div>
            <div>
                <Question
                    key={`${currentQuestion.id}-${questionRound}`}
                    question={currentQuestion}
                    onSubmit={handleQuestionSubmit}
                />
                {submitted && (
                    <button className="basic-button" onClick={handleNextQuestion}>
                        Next Question
                    </button>
                )}
            </div>
        </div>
    );
}