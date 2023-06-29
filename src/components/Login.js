import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password,
        };

        login(userData);
    };
    return (
        <div className="w-50 m-auto">
            <form onSubmit={handleSubmit}>
                <h1 className="display fw-bold text-primary mt-5 text-center">
                    HireMe
                </h1>
                <h2 class="h3 mb-3 text-center mb-5">Please Login</h2>

                <div class="form-floating">
                    <input
                        type="email"
                        class="form-control mb-3"
                        placeholder="name@example.com"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="email">Email address</label>
                </div>
                <div class="form-floating">
                    <input
                        type="password"
                        class="form-control mb-3"
                        placeholder="Password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                </div>

                <button class="btn btn-primary w-100 py-2" type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Login;
