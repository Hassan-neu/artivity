import Link from "next/link";
import React, { useState } from "react";
import {
    AiOutlineTwitter,
    AiOutlineGoogle,
    AiOutlineEye,
    AiOutlineEyeInvisible,
    AiFillFacebook,
} from "react-icons/ai";
import { signIn } from "next-auth/react";
import Head from "next/head";
const Login = () => {
    const handleSignIn = async (provider) => {
        signIn(provider, { callbackUrl: "http://localhost:3000" });
    };
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <Head>
                <title>ARTIVITY | LOGIN</title>
            </Head>
            <div className="login_wrapper">
                <div className="login_container">
                    <div className="login">
                        <div className="bg-login"></div>
                        <div className="form-side">
                            <div className="login-head">
                                <h2>Welcome Back</h2>
                                <p>Welcome back! Please enter your details</p>
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
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                    />
                                    <span
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
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
                                        <AiOutlineGoogle size={20} />
                                        <p>Sign In with Google</p>
                                    </button>
                                </div>
                                <div
                                    className="sign-in facebook"
                                    onClick={() => handleSignIn("facebook")}
                                >
                                    <button type="button">
                                        <AiFillFacebook size={20} />
                                        <p>Sign In with Facebook</p>
                                    </button>
                                </div>
                            </form>
                            <div className="to-optn">
                                <p>
                                    Not Account Yet? {""}
                                    <Link
                                        style={{ color: "#d06224" }}
                                        href="/register"
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
