"use client"
import { SetStateAction, useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;