import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import md5 from "md5";

// custom Hooks
import { useInput } from "../../lib/customHooks/useInput";
import { useSignup } from "../../lib/customHooks/useSignup";

// custom context api
import { SignupContext } from "../../lib/signupContext";

// import Page classes
import classes from "../../style/Account.module.css";

// import Ui Components
import Navbar from "../../components/Ui/Navbar";
import SignupLayout from "../../components/Layout/SignupLayout";
import InfoModal from "../../components/Ui/InfoModal";
import SignupModal from "../../components/Ui/SignupModal";

// Page Constructor Function
const Account = () => {
  const redirectRouter = useRouter();

  const { signupHandler, error, isLoading, success } = useSignup();

  const { emailIsvalid, emailIsChanged, emailInputHandlerObj } = useInput();
  const { passwordIsvalid, passwordIsChanged, passwordInputHandlerObj } =
    useInput();
  const { nameIsvalid, nameIsChanged, nameInputHandlerObj } = useInput();
  const { birthdayIsvalid, birthdayIsChanged, birthdayInputHandlerObj } =
    useInput();

  const { planSelected } = useContext(SignupContext);

  const formSubmitEnable =
    emailIsvalid &&
    passwordIsvalid &&
    nameIsvalid &&
    birthdayIsvalid &&
    emailIsChanged &&
    nameIsChanged &&
    passwordIsChanged &&
    birthdayIsChanged;

  const uniqueIdGenerator_FUNC = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2);

    return head + tail;
  };

  const submitAccountForm__FUNC = (e) => {
    e.preventDefault();

    if (
      emailIsChanged &&
      passwordIsChanged &&
      nameIsChanged &&
      birthdayIsChanged
    ) {
      if (emailIsvalid && passwordIsvalid && nameIsvalid && birthdayIsvalid) {
        const { email, name, password, birthday, gender } = e.target;

        const accountInfosObj = {
          id: uniqueIdGenerator_FUNC(),
          name: name.value,
          email: email.value,
          password: md5(password.value),
          birthday: birthday.value,
          gender: gender.value,
          plan: planSelected,
        };

        signupHandler(accountInfosObj);
      }
    }
  };

  useEffect(() => {
    !planSelected && redirectRouter.push("/signup/plans");
  }, []);

  useEffect(() => {
    if (success) {
      const timeoutID = setTimeout(() => {
        redirectRouter.replace("/welcome");
      }, 3000);
    }
  }, [success]);

  return (
    <main className={classes["signupAccount_main--EL"]}>
      {isLoading ? (
        <SignupModal signupState="loading" />
      ) : (
        error ||
        (success && (
          <SignupModal
            signupState="signupMessage"
            messageType={error ? "error" : "success"}
          />
        ))
      )}
      <Navbar page="signup" />
      <SignupLayout size="sm_layout">
        <div className="signUp_header--EL">
          <h2>Create Your Account</h2>
          <p>Use your email and password to watch on your favorite devices.</p>
        </div>

        <form
          className={classes["signUp_form--EL"]}
          onSubmit={submitAccountForm__FUNC}
        >
          <div className={classes["formInputs--CONTAINER"]}>
            <div
              data-inputerror={!emailIsvalid}
              className={classes["form_fieldset--EL"]}
            >
              <label htmlFor="email">email</label>
              <input
                className={classes["form_input--EL"]}
                type="email"
                id="email"
                name="email"
                onChange={emailInputHandlerObj.resetEmailInputHandler}
                onFocus={emailInputHandlerObj.resetEmailInputHandler}
                onBlur={emailInputHandlerObj.checkEmailValueHandler}
              />
              <span className={classes["inputError--EL"]}>
                <img
                  src="/assets/signupPage-assets/icons/error-icon.svg"
                  alt="input value error"
                />
                Please enter a valid email address
              </span>
            </div>
            <div
              data-inputerror={!passwordIsvalid}
              className={classes["form_fieldset--EL"]}
            >
              <label htmlFor="password">password</label>
              <input
                className={classes["form_input--EL"]}
                type="password"
                id="password"
                name="password"
                onChange={passwordInputHandlerObj.resetPasswordInputHandler}
                onFocus={passwordInputHandlerObj.resetPasswordInputHandler}
                onBlur={passwordInputHandlerObj.checkPasswordValueHandler}
              />
              <span className={classes["inputError--EL"]}>
                <img
                  src="/assets/signupPage-assets/icons/error-icon.svg"
                  alt="input value error"
                />
                Please enter a valid password ( contains uppercase and lowercase
                letters , Numbers , symbols [#?!@$%^&*-] )
              </span>
            </div>
            <div
              data-inputerror={!nameIsvalid}
              className={classes["form_fieldset--EL"]}
            >
              <label htmlFor="name">name</label>
              <input
                className={classes["form_input--EL"]}
                type="text"
                id="name"
                name="name"
                onChange={nameInputHandlerObj.resetNameInputHandler}
                onFocus={nameInputHandlerObj.resetNameInputHandler}
                onBlur={nameInputHandlerObj.checkNameValueHandler}
              />
              <span className={classes["inputError--EL"]}>
                <img
                  src="/assets/signupPage-assets/icons/error-icon.svg"
                  alt="input value error"
                />
                Please enter a valid name ( contains 5 or more characters )
              </span>
            </div>
            <div
              data-inputerror={!birthdayIsvalid}
              className={classes["form_fieldset--EL"]}
            >
              <InfoModal infos="We’ll use this information to create a more personalized Hulu experience for you based on your age.">
                {" "}
                <label htmlFor="birthday">birthday</label>
              </InfoModal>
              <input
                className={classes["form_input--EL"]}
                type="date"
                name="birthday"
                id="birthday"
                onChange={birthdayInputHandlerObj.resetBirthdayInputHandler}
                onFocus={birthdayInputHandlerObj.resetBirthdayInputHandler}
                onBlur={birthdayInputHandlerObj.checkBirthdayValueHandler}
              />
              <span className={classes["inputError--EL"]}>
                <img
                  src="/assets/signupPage-assets/icons/error-icon.svg"
                  alt="input value error"
                />
                You should be 18+
              </span>
            </div>
            <div className={classes["form_fieldset--EL"]}>
              <InfoModal infos="We’ll use this information to create a more personalized Hulu experience for you based on your gender.">
                {" "}
                <label htmlFor="gender">gender</label>
              </InfoModal>
              <select
                className={classes["form_input--EL"]}
                name="gender"
                id="gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>
          <div className={classes["form_footer--CONTAINER"]}>
            <span className={classes["terms--EL"]}>
              By clicking “CONTINUE” you agree to the Hulu{" "}
              <Link href="/terms">Terms of Use</Link> and{" "}
              <Link href="/policy">Privacy Policy</Link>.
            </span>
            <button
              type="submit"
              disabled={!formSubmitEnable}
              className={classes["submitAccountForm--BTN"]}
            >
              continue
            </button>
          </div>
        </form>
      </SignupLayout>
    </main>
  );
};

export default Account;
