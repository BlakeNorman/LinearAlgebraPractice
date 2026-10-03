import { useState } from "react";

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

export default function MultipleChoiceQuestion({ question, onSubmit }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const correctAnswer = question.correctAnswer;

    function handleSubmit() {
        const correct = selectedAnswer === correctAnswer;
        setSubmitted(true);
        onSubmit(correct);
    }

    const [shuffledAnswerChoices] = useState(() => shuffle(
        Object.entries(question.answerChoices).map(([letter, answer]) => ({
            original: letter,
            text: answer
        }))
    ));

    return (
        <div>
            <div>{question.question}</div>
            <div>
                <strong>Select one.</strong>
            </div>
            <div>
                {
                    shuffledAnswerChoices.map((choice, index) => {
                        const letter = String.fromCharCode(65 + index);

                        return (
                            <div key={choice.original}
                                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                            >
                                <button
                                    className="basic-button letter-answer-button"
                                    disabled={submitted}
                                    onClick={() => setSelectedAnswer(choice.original)}
                                    style={{
                                        outline: selectedAnswer === choice.original
                                            ? "3px solid blue" : "none"
                                    }}
                                >
                                    {letter}
                                </button>
                                <span>{choice.text}</span>
                            </div>
                        )
                    })
                }
            </div>
            {selectedAnswer !== null && !submitted && (
                <button className="basic-button" onClick={handleSubmit}>
                    Submit
                </button>
            )}
            {submitted && (
                <>
                    <p>
                        {selectedAnswer === correctAnswer
                            ? "That is correct! 🎉" : "That is incorrect."}
                    </p>
                </>
            )}
        </div>
    );
}