import { Fragment } from "react";

import Loading from "./SignupModals/Loading";
import SignupMessageModal from "./SignupModals/SignupMessageModal";

import classes from "../../style/SignupModal.module.css";

const SignupModal = ({ signupState, messageType, errorType }) => {
  return (
    <Fragment>
      <aside
        className={`${classes["signupModal--EL"]} ${
          signupState === "loading" ? classes["signupLoadingModal--EL"] : ""
        }`}
      >
        {signupState === "loading" ? (
          <Loading />
        ) : (
          <SignupMessageModal messageType={messageType} errorType={errorType} />
        )}
      </aside>
    </Fragment>
  );
};

export default SignupModal;
