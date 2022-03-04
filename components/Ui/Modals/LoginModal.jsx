import { Fragment, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import ReCAPTCHA from "react-google-recaptcha";
import md5 from "md5";

import { UserAuthContext } from "../../../lib/userAuthContext";

import classes from "../../../style/LoginModal.module.css";

const LoginModal = ({ usersAccounts }) => {
  const [loginError, setLoginError] = useState(false);
  const { loginHandler } = useContext(UserAuthContext);
  const router = useRouter();

  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const verifyCallback = (value) => setRecaptchaValue(value);

  const submitLoginFormHandler = (e) => {
    e.preventDefault();

    const loginEmail = e.target.email.value;
    const loginPassword = e.target.password.value;

    if (loginEmail && loginPassword && recaptchaValue) {
      const accountFounded = usersAccounts.find(
        (userAccount) =>
          userAccount.email === loginEmail &&
          userAccount.password === md5(loginPassword)
      );

      if (accountFounded) {
        loginHandler(accountFounded);

        window.location.replace(`/account/${accountFounded.id}`);
        document.querySelector("body").style.overflowY = "scroll";
      } else {
        setLoginError(true);
      }
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
          Email Or Password is Invalid
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
        Don't have an account? <Link href="/signup">Sign up for Hulu.</Link>
      </span>
    </Fragment>
  );
};

export default LoginModal;
