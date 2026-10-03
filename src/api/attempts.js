const API_URL = "http://localhost:8000";

async function createAttempt(question, correct) {
    const token = localStorage.getItem("access_token");

    const response = await fetch(`${API_URL}/attempts/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            question_id: question.id,
            correct: correct
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail || "Failed to record attempt");
    }

    return data;
}

export default createAttempt;