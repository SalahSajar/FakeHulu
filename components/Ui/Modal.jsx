import { Fragment } from "react";

import classes from "../../style/Modal.module.css";

import LoginModal from "./Modals/LoginModal";
import SubscriptionFeaturesIncludedModal from "./Modals/SubscriptionFeaturesIncludedModal";
import ChannelsAreaSearcherModal from "./Modals/ChannelsAreaSearcherModal";
import LivetvDislaimerModal from "./Modals/LivetvDislaimerModal";

const Modal = ({ modalContent, closeModalHandler, usersAccounts }) => {
  return (
    <Fragment>
      <aside className={classes["modal--EL"]}>
        <div
          className={`${classes["modal--WRAPPER"]} ${
            modalContent === "logIn" ? classes["sm_modal"] : classes["md_modal"]
          }`}
        >
          <div
            className={`${classes["modal_content--CONTAINER"]} ${classes["livetvDislaimer_content--CONTAINER"]}`}
          >
            <div className={classes["modal_header--EL"]}>
              <a
                href="#"
                onClick={(e) => closeModalHandler(e, null, false)}
                className={classes["closeModal_btn--EL"]}
              >
                <img
                  src="/assets/welcomePage-assets/icons/close.svg"
                  alt="close modal"
                />
              </a>
            </div>
            <div className={classes["modal_body--EL"]}>
              {modalContent === "livetvDislaimer" ? (
                <LivetvDislaimerModal />
              ) : modalContent === "channelsAreaSearcher" ? (
                <ChannelsAreaSearcherModal />
              ) : modalContent === "logIn" ? (
                <LoginModal usersAccounts={usersAccounts} />
              ) : (
                <SubscriptionFeaturesIncludedModal />
              )}
            </div>
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

export default Modal;
