import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import signin from '../../css/login.module.css';
import toast from "react-hot-toast";
import { Context } from "../../main";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const navigateTo = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://localhost:4000/api/v1/user/login",
                { email, password, confirmPassword, role: "User" },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            );

            toast.success(res.data.message);
            setIsAuthenticated(true);
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("user", JSON.stringify(res.data.user));

            navigateTo("/");
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        }
    };

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <div className={signin.container_form} id={signin.signIn}>
                <div className={signin.box}>
                    <div className={signin.form_p}>
                        <a href="/">
                            <span>
                                <img className={signin.logo} src="/images/logo/PP.png" id={signin.loginlogo} alt="Logo" />
                            </span>
                        </a>
                    </div>

                    <div className={signin.form_pos}>
                        <div className={signin.form_container}>
                            <p className={signin.title_form}>Welcome to PresentPerfect!</p>
                            <form onSubmit={handleLogin}>
                                <div className={signin.form}>
                                    <div className={signin.input_group}>
                                        <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className={signin.input_group}>
                                        <input type="password" className={signin.password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <div className={signin.input_group}>
                                        <input type="password" className={signin.password} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                                        <div className={signin.forgot}>
                                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <input type="submit" className={signin.sign} name="submit" value="Sign In" />
                                </div>
                            </form>

                            <div className={signin.social_message}>
                                <div className={signin.line}></div>
                                <p className={signin.message}>Login with social accounts</p>
                                <div className={signin.line}></div>
                            </div>

                            <div className={signin.social_icons}>
                                <a href="https://myaccount.google.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGoogle} id={signin.icon} />
                                </a>
                                <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebookF} id={signin.icon} />
                                </a>
                                <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faApple} id={signin.icon} />
                                </a>
                                <a href="https://x.com/i/flow/login" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faXTwitter} id={signin.icon} />
                                </a>
                            </div>

                            <p className={signin.signup}>
                                Don't have an account?
                                <a className={signin.message} href="/register"> Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;
