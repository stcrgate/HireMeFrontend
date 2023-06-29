import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const navigate = useNavigate();

    const login = (userData) => {
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Login failed");
                }
            })
            .then((data) => {
                localStorage.setItem("user", JSON.stringify(data));
                setUser(data);
                console.log("Login successful!", data);
                navigate("/view");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    const signup = (userData) => {
        fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json(); // Parse the response body as JSON
                } else {
                    throw new Error("Registration failed");
                }
            })
            .then((data) => {
                console.log("Registration successful!", data);
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    const logout = () => {
        // Perform logout logic here and clear the user data
        setUser(null);
        localStorage.setItem("user", JSON.stringify(null));
        navigate("/");
    };
    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
