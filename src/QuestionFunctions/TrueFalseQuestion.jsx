import { useState } from "react";

export default function TrueFalseQuestion({ question, onSubmit }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const answerChoices = ["True", "False"];
    const correctAnswer = question.correctAnswer;

    function handleSubmit() {
        const correct = selectedAnswer === correctAnswer;
        setSubmitted(true);
        onSubmit(correct);
    }

    return (
        <div>
            <div>{question.question}</div>
            <div>
                <strong>Determine whether the statement is always true or sometimes false.</strong>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {answerChoices.map((answer) => (
                    <button
                        className="basic-button true-false-answer-button"
                        key={answer}
                        disabled={submitted}
                        onClick={() => setSelectedAnswer(answer)}
                        style={{
                            outline: selectedAnswer === answer
                                ? "3px solid blue" : "none"
                        }}
                    >
                        {answer}
                    </button>
                ))}
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