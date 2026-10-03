import { useState } from "react";
import { loginUser } from "../api/auth";

import "../style.css"

export default function Login({ onLoggedIn }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            await loginUser(name, password);
            onLoggedIn();
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="login-register">
                        <input type="text" placeholder="Username" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                    <div className="login-register">
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button className="basic-button" type="submit">
                        Login
                    </button>
                </form>
            </div>

            {error && <p>{error}</p>}
        </div>
    );
}