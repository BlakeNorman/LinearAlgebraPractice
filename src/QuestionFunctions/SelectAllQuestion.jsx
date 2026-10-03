import { useState } from "react";

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

export default function SelectAllQuestion({ question, onSubmit }) {
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const correctAnswers = question.correctAnswers;

    function handleSubmit() {
        const correct = (
            selectedAnswers.length === correctAnswers.length &&
            selectedAnswers.every(letter => correctAnswers.includes(letter))
        );
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
                <strong>Select all that apply.</strong>
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
                                    onClick={() => {
                                        if (selectedAnswers.includes(choice.original)) {
                                            setSelectedAnswers(
                                                selectedAnswers.filter(item => item !== choice.original)
                                            );
                                        } else {
                                            setSelectedAnswers(
                                                [...selectedAnswers, choice.original]
                                            );
                                        }
                                    }}
                                    style={{
                                        outline: selectedAnswers.includes(choice.original)
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
            {selectedAnswers.length > 0 && !submitted && (
                <button className="basic-button" onClick={handleSubmit}>
                    Submit
                </button>
            )}
            {submitted && (
                <>
                    <p>
                        {
                            (selectedAnswers.length === correctAnswers.length &&
                                selectedAnswers.every(letter => correctAnswers.includes(letter))
                            )
                                ? "That is correct! 🎉" : "That is incorrect."}
                    </p>
                </>
            )}
        </div>
    );
}