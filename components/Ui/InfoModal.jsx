import { Fragment, useEffect } from "react";

import classes from "../../style/InfoModal.module.css";

const toggleMoreInfosBlockHandler = (e) => {
  const btnParentElement = e.currentTarget.parentElement;
  const currentState = e.currentTarget.parentElement.dataset.expanded;

  btnParentElement.dataset.expanded = currentState === "false" ? true : false;
};

const InfoModal = ({ children, infos }) => {
  return (
    <Fragment>
      <div className={classes["inputHeader--CONTAINER"]}>
        {children}
        <div data-expanded={false} className={classes["moreInfos_btn--EL"]}>
          <button
            type="button"
            onClick={toggleMoreInfosBlockHandler}
            className={classes["infoModal--BTN"]}
          >
            <img
              src="/assets/signupPage-assets/icons/more-info.svg"
              alt="more infos icon"
            />
          </button>
          <span className={classes["infoModal_content--WRAPPER"]}>{infos}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoModal;
