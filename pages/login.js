import Link from "next/link";
import React, { useState } from "react";
import {
    AiOutlineGoogle,
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from "react-icons/ai";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useFormik } from "formik";
import loginValidate from "@/libs/loginValidate";
import { useRouter } from "next/router";
const Login = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: loginValidate,
        onSubmit,
    });
    async function onSubmit(values) {
        const data = await signIn("credentials", {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/",
        });
        console.log(data);
        data.status && router.push(data.url);
    }
    const handleSignIn = async (provider) => {
        signIn(provider, {
            callbackUrl:
                "https://artivity.vercel.app" ?? "http://localhost:3000",
        });
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
                            <form
                                className="login-form"
                                onSubmit={formik.handleSubmit}
                            >
                                <div
                                    data-mode={
                                        formik.errors.email &&
                                        formik.touched.email &&
                                        "invalid"
                                    }
                                >
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        {...formik.getFieldProps("email")}
                                    />
                                    {formik.errors.email &&
                                        formik.touched.email && (
                                            <p>{formik.errors.email}</p>
                                        )}
                                </div>
                                <div
                                    data-mode={
                                        formik.errors.password &&
                                        formik.touched.password &&
                                        "invalid"
                                    }
                                >
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        {...formik.getFieldProps("password")}
                                    />
                                    {formik.errors.password &&
                                        formik.touched.password && (
                                            <p>{formik.errors.password}</p>
                                        )}
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
                            </form>
                            <div className="to-optn">
                                <p>
                                    No Account Yet? {""}
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
