import React, { Fragment, useContext } from "react";
import { useRouter } from "next/router";

import { useWatchlist } from "../../lib/customHooks/useWatchlist";
import { useUserAuth } from "../../lib/customHooks/useUserAuth";

import { UserWatchlistContext } from "../../lib/userWatchlistContext";

import classes from "../../style/ShowDetailsUi.module.css";

const ShowDetailsUi = ({ type, showDetails, displayTrailerModalHandler }) => {
  const { accountID } = useRouter().query;

  const {
    storeShowToWatchlistDB___Handler,
    removeShowFromWatchlistDB___Handler,
    watchlistIsLoading,
  } = useWatchlist();
  const { quickUserAuthCheckHandler } = useUserAuth();

  const { userWatchlistMovies, userWatchlistTvShows } =
    useContext(UserWatchlistContext);

  const runTimeHander = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${!!hours && `${hours}h`} ${minutes}min`;
  };

  const addToWatchlistHandler = () => {
    const quickAuthCheck = quickUserAuthCheckHandler(accountID);
    const {
      title,
      name,
      tagline,
      release_date,
      first_air_date,
      id,
      genres,
      poster_path,
    } = showDetails;

    if (accountID && quickAuthCheck) {
      if (type === "movies") {
        storeShowToWatchlistDB___Handler(
          accountID,
          {
            title,
            tagline,
            release_date,
            id,
            genres,
            poster_path,
          },
          type
        );
      } else {
        storeShowToWatchlistDB___Handler(
          accountID,
          {
            name,
            tagline,
            first_air_date,
            id,
            genres,
            poster_path,
          },
          type
        );
      }
    }
  };

  const removeFromWatchlistHandler = () => {
    const quickAuthCheck = quickUserAuthCheckHandler(accountID);
    const { id } = showDetails;

    if (accountID && quickAuthCheck) {
      removeShowFromWatchlistDB___Handler(accountID, id, type);
    }
  };

  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${showDetails.backdrop_path})`,
        }}
        className={classes["showdetails_content--CONTAINER"]}
      >
        <div className={classes["show_image--WRAPPER"]}>
          {showDetails.poster_path ? (
            <img
              loading="eager"
              src={`https://image.tmdb.org/t/p/original${showDetails.poster_path}`}
              alt={`${
                type === "movies" ? showDetails.title : showDetails.name
              } poster`}
            />
          ) : (
            <img
              src="/assets/accountPage-assets/default_images/showPosterNotAvailable.png"
              alt={`${showDetails.title || showDetails.name}'s poster`}
            />
          )}
        </div>
        <div className={classes["show_details--WRAPPER"]}>
          <div className={classes["show_details_header--CONTAINER"]}>
            <h2 className={classes["show_title--EL"]}>
              {type === "movies" ? showDetails.title : showDetails.name}
            </h2>

            {type === "movies" ? (
              <span className={classes["show_mini_details--EL"]}>
                {showDetails.release_date.replaceAll("-", "/")} &#x2726;{" "}
                {showDetails.genres.map((genre) => genre.name).join(", ")}{" "}
                &#x2726;{" "}
                {!!showDetails.runtime && runTimeHander(showDetails.runtime)}
              </span>
            ) : (
              <span className={classes["show_mini_details--EL"]}>
                {showDetails.first_air_date.replaceAll("-", "/")} &#x2726;{" "}
                {showDetails.genres.map((genre) => genre.name).join(", ")}{" "}
                &#x2726;{" "}
                {`${showDetails.number_of_seasons} ${
                  showDetails.number_of_seasons > 1 ? "Seasons" : "Season"
                }`}
              </span>
            )}
          </div>

          <div className={classes["show_description--CONTAINER"]}>
            <span
              className={`${classes["show_detail_header--EL"]} ${classes["show_description_header--EL"]}`}
            >
              Storyline
            </span>
            <p className={classes["show_decription--EL"]}>
              {showDetails.overview}
            </p>
          </div>

          {!!showDetails.vote_average && (
            <div className={classes["show_ratings--CONTAINER"]}>
              <span
                className={`${classes["show_detail_header--EL"]} ${classes["show_ratings_header--EL"]}`}
              >
                Rating
              </span>

              <div className={classes["show_rating_block--EL"]}>
                <img
                  src="/assets/accountPage-assets/logos/imdb_icon.png"
                  alt="imdb icon"
                />
                <span className={classes["show_rating--EL"]}>
                  {showDetails.vote_average}
                </span>
              </div>
            </div>
          )}

          {!!showDetails.production_companies.length && (
            <div className={classes["show_companies--CONTAINER"]}>
              <span
                className={`${classes["show_detail_header--EL"]} ${classes["show_companies_header--EL"]}`}
              >
                Production Companies
              </span>
              <div className={classes["show_companies_blocks--WRAPPER"]}>
                {showDetails.production_companies.map((productionCompany) => {
                  return (
                    productionCompany.logo_path && (
                      <div
                        key={productionCompany.name}
                        className={classes["show_company_details--BLOCK"]}
                      >
                        <div className={classes["show_company_image--EL"]}>
                          <img
                            src={`https://image.tmdb.org/t/p/original${productionCompany.logo_path}`}
                            alt={`${productionCompany.name} logo`}
                          />
                        </div>
                        <span className={classes["show_company_title--EL"]}>
                          {productionCompany.name}
                        </span>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          )}

          <div className={classes["show_cta_btns--CONTAINER"]}>
            <button
              type="button"
              className={classes["watchTrailer--BTN"]}
              onClick={() => displayTrailerModalHandler(true)}
            >
              watch trailer{" "}
              <span className={classes["show_cta_icon--CONTAINER"]}>
                <img src="/assets/accountPage-assets/icons/play.png" />
              </span>
            </button>
            {type === "movies" ? (
              <Fragment>
                {!userWatchlistMovies ||
                !userWatchlistMovies.length ||
                !userWatchlistMovies.find(
                  (userWatchlistMovie) =>
                    userWatchlistMovie.id === showDetails.id
                ) ? (
                  <button
                    type="button"
                    className={`${classes["show_watchlist--BTN"]} ${classes["addToWatchlist_BTN"]}`}
                    disabled={watchlistIsLoading}
                    onClick={addToWatchlistHandler}
                  >
                    {!watchlistIsLoading && (
                      <div>
                        add to watchlist
                        <span className={classes["show_cta_icon--CONTAINER"]}>
                          <img src="/assets/accountPage-assets/icons/plus.png" />
                        </span>
                      </div>
                    )}
                    {watchlistIsLoading && (
                      <img
                        className={classes["watchlist_loading--IMG"]}
                        src="/assets/accountPage-assets/icons/loading-circle.gif"
                        alt="loading circle"
                      />
                    )}
                  </button>
                ) : (
                  ""
                )}
                {!!userWatchlistMovies &&
                  !!userWatchlistMovies.length &&
                  !!userWatchlistMovies.find(
                    (userWatchlistMovie) =>
                      userWatchlistMovie.id === showDetails.id
                  ) && (
                    <button
                      type="button"
                      className={`${classes["show_watchlist--BTN"]} ${classes["removeFromWatchlist_BTN"]}`}
                      disabled={watchlistIsLoading}
                      onClick={removeFromWatchlistHandler}
                    >
                      {!watchlistIsLoading && (
                        <div>
                          remove from watchlist
                          <span className={classes["show_cta_icon--CONTAINER"]}>
                            <img src="/assets/accountPage-assets/icons/minus.png" />
                          </span>
                        </div>
                      )}
                      {watchlistIsLoading && (
                        <img
                          className={classes["watchlist_loading--IMG"]}
                          src="/assets/accountPage-assets/icons/loading-circle.gif"
                          alt="loading circle"
                        />
                      )}
                    </button>
                  )}
              </Fragment>
            ) : (
              <Fragment>
                {!userWatchlistTvShows ||
                !userWatchlistTvShows.length ||
                !userWatchlistTvShows.find(
                  (userWatchlistTvShow) =>
                    userWatchlistTvShow.id === showDetails.id
                ) ? (
                  <button
                    type="button"
                    className={`${classes["show_watchlist--BTN"]} ${classes["addToWatchlist_BTN"]}`}
                    disabled={watchlistIsLoading}
                    onClick={addToWatchlistHandler}
                  >
                    {!watchlistIsLoading && (
                      <div>
                        add to watchlist
                        <span className={classes["show_cta_icon--CONTAINER"]}>
                          <img src="/assets/accountPage-assets/icons/plus.png" />
                        </span>
                      </div>
                    )}
                    {watchlistIsLoading && (
                      <img
                        className={classes["watchlist_loading--IMG"]}
                        src="/assets/accountPage-assets/icons/loading-circle.gif"
                        alt="loading circle"
                      />
                    )}
                  </button>
                ) : (
                  ""
                )}
                {!!userWatchlistTvShows &&
                  !!userWatchlistTvShows.length &&
                  !!userWatchlistTvShows.find(
                    (userWatchlistTvShow) =>
                      userWatchlistTvShow.id === showDetails.id
                  ) && (
                    <button
                      type="button"
                      className={`${classes["show_watchlist--BTN"]} ${classes["removeFromWatchlist_BTN"]}`}
                      disabled={watchlistIsLoading}
                      onClick={removeFromWatchlistHandler}
                    >
                      {!watchlistIsLoading && (
                        <div>
                          remove from watchlist
                          <span className={classes["show_cta_icon--CONTAINER"]}>
                            <img src="/assets/accountPage-assets/icons/minus.png" />
                          </span>
                        </div>
                      )}
                      {watchlistIsLoading && (
                        <img
                          className={classes["watchlist_loading--IMG"]}
                          src="/assets/accountPage-assets/icons/loading-circle.gif"
                          alt="loading circle"
                        />
                      )}
                    </button>
                  )}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShowDetailsUi;
