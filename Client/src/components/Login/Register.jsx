import React, { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../main.jsx";
import signin from '../../css/login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faXTwitter, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/User/register",
          { firstName, lastName, email, contact, password },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setcontact("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
    <div className={signin.container_form} id={signin.signIn}>
    <div className={signin.box}>
        <div className={signin.form_p}>
            <a href="/">
              <span><img className={signin.logo} src="/images/logo/PP.png" id={signin.loginlogo} alt="logo" /></span>
            </a>
        </div>
        
        <div className={signin.reg_form_pos}><div className={signin.form_container}>
            <p className={signin.title_form}>Welcome to PresentPerfect!</p>
            <form onSubmit={handleRegistration}>
            <div className={signin.form}>
                <div className={signin.input_group}>
                    <input type="text" className={signin.firstname} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                    <input type="text" className={signin.lastname} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className={signin.input_group}>
                    <input type="email" className={signin.email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={signin.input_group}>
                    <input type="text" className={signin.contact} placeholder="Contact" onChange={(e) => setcontact(e.target.value)}/>
                </div>
                <div className={signin.input_group}>
                    <input type="password" className={signin.password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <input type="submit" className={signin.reg_submit} name="submit" value="Sign In" />
                
            </div>
            </form>
            <div className={signin.social_message}>
                <div className={signin.line}></div>
                <p className={signin.message}>Login with social accounts</p>
                <div className={signin.line}></div>
            </div>
            <div className={signin.social_icons}>
                <a href="https://myaccount.google.com" target="_blank"> <FontAwesomeIcon icon={faGoogle} id={signin.icon} /></a>
                <a href="https://www.facebook.com/login" target="_blank"> <FontAwesomeIcon icon={faFacebookF} id={signin.icon} /></a>
                <a href="https://www.apple.com" target="_blank"><FontAwesomeIcon icon={faApple} id={signin.icon} /></a>
                <a href="https://x.com/i/flow/login" target="_blank"><FontAwesomeIcon icon={faXTwitter} id={signin.icon} /></a>
            </div>
            <p className={signin.signup}>Already Registered?
                <a className={signin.message} href="/login">Sign in</a>
            </p>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Register;

