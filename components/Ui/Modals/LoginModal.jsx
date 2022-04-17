import { Fragment, useState } from "react";
import Link from "next/link";

import { auth } from "../../../lib/configs/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import ReCAPTCHA from "react-google-recaptcha";

import classes from "../../../style/LoginModal.module.css";

const LoginModal = () => {
  const [loginError, setLoginError] = useState(false);
  const [loginErrorType, setLoginErrorType] = useState(null);

  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const verifyCallback = (value) => setRecaptchaValue(value);

  const submitLoginFormHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email && password && recaptchaValue) {
      signInWithEmailAndPassword(auth, email, password)
        .then((loginRes) => {
          window.location.replace(`/account/${loginRes.user.uid}`);
          document.querySelector("body").style.overflowY = "scroll";

          sessionStorage.setItem("uid", loginRes.user.uid);
          sessionStorage.setItem("token", loginRes.user.accessToken);

          setLoginError(false);
          setLoginErrorType(null);
        })
        .catch((err) => {
          console.log(err.message);
          setLoginError(true);

          err.message.includes("auth/user-not-found") &&
            setLoginErrorType("userNotFound");
          err.message.includes("auth/wrong-password") &&
            setLoginErrorType("wrongPassword");
          err.message.includes("auth/network-request-failed") &&
            setLoginErrorType("failedRequest");
        });
    }
  };

  return (
    <Fragment>
      <h3 className={classes["loginModal_title--EL"]}>Log In</h3>
      <form
        onSubmit={submitLoginFormHandler}
        className={classes["login_form--EL"]}
      >
        <span
          className={`${classes["loginError--EL"]} ${
            loginError && classes["loginErrorActivate"]
          }`}
        >
          {!!loginErrorType &&
            loginErrorType === "userNotFound" &&
            "Error: User not Found"}
          {!!loginErrorType &&
            loginErrorType === "wrongPassword" &&
            "Error: Password is Incorrect"}
          {!!loginErrorType &&
            loginErrorType === "failedRequest" &&
            "Error: Something Went Wrong, Please try Again Later"}
        </span>

        <div className={classes["login_form--CONTAINER"]}>
          <div className={classes["loginForm_input--WRAPPER"]}>
            <label htmlFor="email" required>
              Email
            </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className={classes["loginForm_input--WRAPPER"]}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
        </div>
        <a href="#" className={classes["findEmailOrPassword_btn--EL"]}>
          Forgot your email or password?
        </a>
        <div className={classes["recaptch_block--CONTAINER"]}>
          <ReCAPTCHA
            sitekey={
              process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY ||
              process.env.NEXT_PUBLIC_VERCEL_RECAPTCHA_SITEKEY
            }
            onChange={verifyCallback}
          />
        </div>
        <button type="submit" className={classes["login_btn--EL"]}>
          LOG IN
        </button>
      </form>
      <span className={classes["signUp_directioning--EL"]}>
        Don't have an account?{" "}
        <Link href="/signup/plans">Sign up for Hulu.</Link>
      </span>
    </Fragment>
  );
};

export default LoginModal;
