import Link from "next/link";
import React, { useState } from "react";
import {
    AiOutlineTwitter,
    AiOutlineGoogle,
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from "react-icons/ai";
import { signIn } from "next-auth/react";
const Login = () => {
    const handleSignIn = async (provider) => {
        signIn(provider, { callbackUrl: "http://localhost:3000" });
    };
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="login_wrapper">
            <div className="login_container">
                <div className="login">
                    <div className="login-head">
                        <h2>Sign In</h2>
                    </div>
                    <form action="submit" className="login-form">
                        <div className="email">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="password">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible />
                                ) : (
                                    <AiOutlineEye />
                                )}
                            </span>
                        </div>
                        <div className="login-btn">
                            <button type="submit">Log in</button>
                        </div>
                        <div
                            className="sign-in google"
                            onClick={() => handleSignIn("google")}
                        >
                            <button type="button">
                                Sign In with Google
                                <AiOutlineGoogle size={20} />
                            </button>
                        </div>
                        <div
                            className="sign-in facebook"
                            onClick={() => handleSignIn("twitter")}
                        >
                            <button type="button">
                                Sign In with Twitter
                                <AiOutlineTwitter size={20} />
                            </button>
                        </div>
                    </form>
                    <div className="to-optn">
                        Not Account Yet?{" "}
                        <Link style={{ color: "#d06224" }} href="/register">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
