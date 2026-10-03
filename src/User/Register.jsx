import { useState } from "react";
import { registerUser } from "../api/auth";

export default function Register({ onRegistered }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await registerUser(name, password);
            onRegistered();
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h1>Create Account</h1>

            <form onSubmit={handleSubmit}>
                <div className="login-register">
                    <input type="text" placeholder="Username" value={name} onChange={e => setName(e.target.value)} />
                </div>

                <div className="login-register">
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="login-register">
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                </div>

                <button className="basic-button" type="submit">
                    Create Account
                </button>
            </form>

            {error && <p>{error}</p>}
        </div>
    );
}