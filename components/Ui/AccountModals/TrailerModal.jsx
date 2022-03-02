import React, { Fragment } from "react";

import classes from "../../../style/TrailerModal.module.css";

const TrailerModal = ({
  displayTrailerModalHandler,
  displayTrailerModal,
  showTrailerDetails,
}) => {
  const trailerModalHandler = (e) => {
    e.preventDefault();

    displayTrailerModalHandler(false);
  };

  return (
    <Fragment>
      <div
        data-visible={displayTrailerModal}
        className={`f-center-center ${classes["trailer_modal--BLOCK"]}`}
      >
        <div className={`${classes["trailer_modal_content--CONTAINER"]}`}>
          <a
            href="#"
            className={classes["close_trailer_modal--BTN"]}
            onClick={trailerModalHandler}
          >
            <img src="/assets/accountPage-assets/icons/close.svg" alt="Close" />
          </a>
          <iframe
            className={classes["trailer_video--EL"]}
            width="100%"
            src={`https://www.youtube.com/embed/${showTrailerDetails.key}`}
            title={`Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
};

export default TrailerModal;
