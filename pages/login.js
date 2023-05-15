import Link from "next/link";
import React, { useState } from "react";
import {
    AiFillFacebook,
    AiOutlineGoogle,
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from "react-icons/ai";
import { signIn } from "next-auth/react";
const Login = () => {
    const handleGoogleSign = async () => {
        signIn("google", { callbackUrl: "http://localhost:3000" });
    };
    const handleFaceebookSign = async () => {
        signIn("facebook", { callbackUrl: "http://localhost:3000" });
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
                            onClick={handleGoogleSign}
                        >
                            <button type="button">
                                Sign In with Google
                                <AiOutlineGoogle size={20} />
                            </button>
                        </div>
                        <div
                            className="sign-in facebook"
                            onClick={handleFaceebookSign}
                        >
                            <button type="button">
                                Sign In with Facebook
                                <AiFillFacebook size={20} />
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
