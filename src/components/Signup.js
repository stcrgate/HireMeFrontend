import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signup } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: name,
            email: email,
            password: password,
        };
        // Make API call to register the user
        signup(userData);
    };
    return (
        <div className="w-50 m-auto">
            <form onSubmit={handleSubmit}>
                <h1 className="display fw-bold text-primary mt-5 text-center">HireMe</h1>
                <h2 class="h3 mb-3 text-center mb-5">Please signup</h2>

                <div class="form-floating">
                    <input
                        type="text"
                        class="form-control mb-3"
                        placeholder="John Doe"
                        name="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label for="name">Name</label>
                </div>
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

export default Signup;
