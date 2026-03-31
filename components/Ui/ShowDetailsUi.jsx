import React, { Fragment, useContext } from "react";
import { useRouter } from "next/router";

import { auth } from "@lib/configs/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import { useWatchlist } from "@lcustomHooks/useWatchlist";
import { useUserAuth } from "@lcustomHooks/useUserAuth";

import { UserWatchlistContext } from "@lib/userWatchlistContext";

import classes from "@styles/ShowDetailsUi.module.css";

const ShowDetailsUi = ({ type, showDetails, displayTrailerModalHandler }) => {
  const router = useRouter();
  const { accountID } = useRouter().query;

  const {
    storeShowToWatchlistDB___Handler,
    removeShowFromWatchlistDB___Handler,
    watchlistIsLoading,
  } = useWatchlist();
  const { quickUserAuthCheckHandler } = useUserAuth();

  const { userWatchlistMovies, userWatchlistTvShows } = useContext(UserWatchlistContext);

  const formattedReleaseDate = (showDetails.release_date || showDetails.first_air_date).replaceAll("-", "/");
  const formattedShowGenres = showDetails.genres.map((genre) => genre.name).join(", ");

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

    if (!!accountID) {
      onAuthStateChanged(auth, (user) => {
        if (!!user) {
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
        } else {
          router.replace("/welcome");
        }
      });
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
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${showDetails.backdrop_path})`,
        }}
        className={classes["showdetails_content--CONTAINER"]}
      >
        <div className={classes["show_image--WRAPPER"]}>
          {showDetails.poster_path ? (
            <img
              loading="eager"
              src={`https://image.tmdb.org/t/p/w780${showDetails.poster_path}`}
              alt={`${type === "movies" ? showDetails.title : showDetails.name} poster`}
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
            <h2 className={classes["show_title--EL"]}> {showDetails.title || showDetails.name} </h2>

            <span className={classes["show_mini_details--EL"]}>
              {formattedReleaseDate} &#x2726; {formattedShowGenres} &#x2726; {
                type === "movies" ? !!showDetails.runtime && runTimeHander(showDetails.runtime) : `${showDetails.number_of_seasons} Season${showDetails.number_of_seasons > 1 ? "s" : ""}`
              }
            </span>
          </div>

          <div className={classes["show_description--CONTAINER"]}>
            <span
              className={`${classes["show_detail_header--EL"]} ${classes["show_description_header--EL"]}`}
            >Storyline</span>
            <p className={classes["show_decription--EL"]}> {showDetails.overview} </p>
          </div>

          {!!showDetails.vote_average && (
            <div className={classes["show_ratings--CONTAINER"]}>
              <span
                className={`${classes["show_detail_header--EL"]} ${classes["show_ratings_header--EL"]}`}
              >Rating</span>

              <div className={classes["show_rating_block--EL"]}>
                <img
                  src="/assets/accountPage-assets/logos/imdb_icon.png"
                  alt="imdb icon"
                />
                <span className={classes["show_rating--EL"]}>{showDetails.vote_average}</span>
              </div>
            </div>
          )}

          {!!showDetails.production_companies.length && (
            <div className={classes["show_companies--CONTAINER"]}>
              <span
                className={`${classes["show_detail_header--EL"]} ${classes["show_companies_header--EL"]}`}
              > Production Companies </span>
              <div className={classes["show_companies_blocks--WRAPPER"]}>
                {showDetails?.production_companies?.map((productionCompany) => {
                  return ( productionCompany.logo_path && (
                      <div key={productionCompany.name} className={classes["show_company_details--BLOCK"]} >
                        <div className={classes["show_company_image--EL"]}>
                          <img
                            src={`https://image.tmdb.org/t/p/w154${productionCompany.logo_path}`}
                            alt={`${productionCompany.name} logo`}
                          />
                        </div>
                        <span className={classes["show_company_title--EL"]}>{productionCompany.name}</span>
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
