const API_URL = "http://localhost:8000";

export async function getTopicMastery(topicID) {
    const token = localStorage.getItem("access_token");

    const response = await fetch(`${API_URL}/topics/${topicID}/mastery`,
        { headers: { "Authorization": `Bearer ${token}` } }
    );

    const data = await response.json();

    if (!response.ok) {
        console.log("Backend error:", data);
        throw new Error("Could not retrieve topic mastery");
    }

    return data;

}

export async function resetTopicMastery(topicID) {
    const token = localStorage.getItem("access_token");

    const response = await fetch(`${API_URL}/topics/${topicID}/reset-mastery`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error("Could not reset topic mastery");
    }
}