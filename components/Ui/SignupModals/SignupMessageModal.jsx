import React from "react";

import classes from "../../../style/SignupMessageModal.module.css";

const SignupMessageModal = ({ messageType, errorType }) => {
  return (
    <div
      className={`${classes["signupMessage_block--CONTAINER"]} ${
        messageType === "error"
          ? classes["errorModal--EL"]
          : classes["successModal--EL"]
      }`}
    >
      <span className={classes["signupMessage--EL"]}>
        {messageType === "error" &&
          !errorType &&
          "something Went soo Wrong!! Please try Again Later"}
        {messageType === "success" && "you signed up successfully!!"}
        {messageType === "error" && errorType && "Email is Already in Use"}
      </span>
    </div>
  );
};

export default SignupMessageModal;
