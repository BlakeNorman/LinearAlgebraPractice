const API_URL = "http://localhost:8000";

export async function registerUser(name, password) {
    const response = await fetch(`${API_URL}/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail || "Registration failed");
    }

    return data;
}

export async function loginUser(name, password) {
    const formData = new URLSearchParams();

    formData.append("username", name);
    formData.append("password", password);

    const response = await fetch(`${API_URL}/user/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail || "Login failed");
    }

    localStorage.setItem("access_token", data.access_token);

    return data
}

export function logoutUser() {
    localStorage.removeItem("access_token");
}

export function getAccessToken() {
    return localStorage.getItem("access_token");
}