import React from "react";

import classes from "../../../style/SignupMessageModal.module.css";

const SignupMessageModal = ({ messageType }) => {
  return (
    <div
      className={`${classes["signupMessage_block--CONTAINER"]} ${
        messageType === "error"
          ? classes["errorModal--EL"]
          : classes["successModal--EL"]
      }`}
    >
      <span className={classes["signupMessage--EL"]}>
        {messageType === "error"
          ? "something Went soo Wrong!! Please try Again Later"
          : "you signed up successfully!!"}
      </span>
    </div>
  );
};

export default SignupMessageModal;
