import React from "react";

import classes from "../../../style/LoadingModal.module.css";

const LoadingModal = ({ spacedState, largeHeight }) => {
  return (
    <div
      className={`${spacedState && classes["vertical_spacing"]} ${
        largeHeight && classes["large_height_loadingModal"]
      } ${classes["loading_modal--EL"]}`}
    >
      <div className={classes["loading_block--EL"]}>
        <img src="/assets/accountPage-assets/icons/loading.gif" alt="loading" />
      </div>
    </div>
  );
};

export default LoadingModal;
