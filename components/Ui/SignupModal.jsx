import { Fragment } from "react";

import Loading from "./SignupModals/Loading";
import SignupMessageModal from "./SignupModals/SignupMessageModal";

import classes from "../../style/SignupModal.module.css";

const SignupModal = ({ signupState, messageType }) => {
  return (
    <Fragment>
      <aside
        className={`${classes["signupModal--EL"]} ${
          !!signupState && signupState === "loading"
            ? classes["signupLoadingModal--EL"]
            : ""
        }`}
      >
        {signupState === "loading" ? (
          <Loading />
        ) : (
          <SignupMessageModal messageType={messageType} />
        )}
      </aside>
    </Fragment>
  );
};

export default SignupModal;
