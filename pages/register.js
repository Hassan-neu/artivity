import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const Register = () => {
    const [showPass, setShowPass] = useState({ pass: false, cPass: false });
    return (
        <>
            <Head>
                <title>ARTIVITY | REGISTER</title>
            </Head>
            <div className="register_wrapper">
                <div className="register_container">
                    <div className="register">
                        <div className="bg-register"></div>
                        <div className="form-side">
                            <div className="register-head">
                                <h2>Sign Up</h2>
                                <p>
                                    Sign up now and get exclusive access to our
                                    art works
                                </p>
                            </div>
                            <form action="submit" className="register-form">
                                <div className="name">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="username">
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="username"
                                    />
                                </div>
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
                                            showPass.pass ? "text" : "password"
                                        }
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                    />
                                    <span
                                        onClick={() =>
                                            setShowPass({
                                                ...showPass,
                                                pass: !showPass.pass,
                                            })
                                        }
                                    >
                                        {showPass.pass ? (
                                            <AiOutlineEyeInvisible />
                                        ) : (
                                            <AiOutlineEye />
                                        )}
                                    </span>
                                </div>
                                <div className="cpassword">
                                    <input
                                        type={
                                            showPass.cPass ? "text" : "password"
                                        }
                                        name="cpassword"
                                        id="cpassword"
                                        placeholder="Confirm Password"
                                    />
                                    <span
                                        onClick={() =>
                                            setShowPass({
                                                ...showPass,
                                                cPass: !showPass.cPass,
                                            })
                                        }
                                    >
                                        {showPass.cPass ? (
                                            <AiOutlineEyeInvisible />
                                        ) : (
                                            <AiOutlineEye />
                                        )}
                                    </span>
                                </div>
                                <div className="sign-up">
                                    <button type="submit">Sign Up</button>
                                </div>
                            </form>
                            <div className="to-optn">
                                <p>
                                    Already have an account? {""}
                                    <Link
                                        style={{ color: "#d06224" }}
                                        href="/login"
                                    >
                                        Sign In
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

export default Register;
