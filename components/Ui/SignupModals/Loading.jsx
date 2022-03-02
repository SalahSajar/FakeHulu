import React from "react";

import classes from "../../../style/Loading.module.css";

const Loading = () => {
  return (
    <div className={classes["loadingModal_block--EL"]}>
      <img
        src="/assets/signupPage-assets/icons/Settings.gif"
        alt="loading gif"
      />
    </div>
  );
};

export default Loading;
