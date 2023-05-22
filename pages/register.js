import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";
import registerValidate from "@/libs/registerValidate";
import { useRouter } from "next/router";
const Register = () => {
    const router = useRouter();
    const [showPass, setShowPass] = useState({ pass: false, cPass: false });
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            cPassword: "",
        },
        validate: registerValidate,
        onSubmit,
    });
    async function onSubmit(values) {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        };
        await fetch("http://localhost:3000/api/auth/signup", options)
            .then((data) => data.json())
            .then((dir) => dir && router.push("/login"));
    }
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
                                <h2>Create an Account</h2>
                                <p>
                                    Sign up now and get exclusive access to our
                                    art works
                                </p>
                            </div>
                            <form
                                className="register-form"
                                onSubmit={formik.handleSubmit}
                            >
                                <div
                                    data-mode={
                                        formik.errors.firstName &&
                                        formik.touched.firstName &&
                                        "invalid"
                                    }
                                >
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstname"
                                        placeholder="First Name"
                                        {...formik.getFieldProps("firstName")}
                                    />
                                    {formik.errors.firstName &&
                                        formik.touched.firstName && (
                                            <p>{formik.errors.firstName}</p>
                                        )}
                                </div>
                                <div
                                    data-mode={
                                        formik.errors.lastName &&
                                        formik.touched.lastName &&
                                        "invalid"
                                    }
                                >
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastname"
                                        placeholder="Last name"
                                        {...formik.getFieldProps("lastName")}
                                    />
                                    {formik.errors.lastName &&
                                        formik.touched.lastName && (
                                            <p>{formik.errors.lastName}</p>
                                        )}
                                </div>
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
                                            showPass.pass ? "text" : "password"
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
                                <div
                                    data-mode={
                                        formik.errors.cPassword &&
                                        formik.touched.cPassword &&
                                        "invalid"
                                    }
                                >
                                    <input
                                        type={
                                            showPass.cPass ? "text" : "password"
                                        }
                                        name="cPassword"
                                        id="cpassword"
                                        placeholder="Confirm Password"
                                        {...formik.getFieldProps("cPassword")}
                                    />
                                    {formik.errors.cPassword &&
                                        formik.touched.cPassword && (
                                            <p>{formik.errors.cPassword}</p>
                                        )}
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
