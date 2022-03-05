import React, { useState, useContext, useEffect, Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import { useWatchlist } from "../../../lib/customHooks/useWatchlist";

import { UserWatchlistContext } from "../../../lib/userWatchlistContext";

import AccountLayout from "../../../components/Layout/AccountLayout";
import LoadingModal from "../../../components/Ui/AccountModals/LoadingModal";

import classes from "../../../style/watchlist.module.css";

const Watchlist = () => {
  const [watchlistNavigation, setWatchlistNavigation] = useState("movies");

  const {
    fetchUserWatchlistFromDB___Handler,
    removeShowFromWatchlistDB___Handler,
    watchlistIsLoading,
    watchlistError,
  } = useWatchlist();

  const { userWatchlistMovies, userWatchlistTvShows } =
    useContext(UserWatchlistContext);

  const { accountID } = useRouter().query;

  const changeWatchlistNavigationHandler = (navigationState) => {
    setWatchlistNavigation(navigationState);
  };

  useEffect(() => {
    if (accountID) {
      fetchUserWatchlistFromDB___Handler(accountID, "movies");
      fetchUserWatchlistFromDB___Handler(accountID, "tvShows");
    }
  }, [accountID]);

  const genresReformationHandler = (genres) =>
    genres.map((genre) => genre.name).join(", ");

  return (
    <Fragment>
      <Head>
        <title>Watchlist | Hulu</title>
      </Head>
      <AccountLayout accountPage="watchlist" showNavbar="true">
        <div className={classes["watchlist--BLOCK"]}>
          <header className={classes["watchlist_header--CONTAINER"]}>
            <div className={classes["watchlict_navigation--BLOCK"]}>
              <div
                className={`f-center-between ${classes["watchlict_navigation_content--WRAPPER"]}`}
              >
                <button
                  type="button"
                  onClick={() => changeWatchlistNavigationHandler("movies")}
                  className={`${
                    watchlistNavigation === "movies" &&
                    classes["active_navigation_state"]
                  } ${classes["watchlist_navigation--BTN"]}`}
                >
                  movies
                </button>
                <button
                  type="button"
                  onClick={() => changeWatchlistNavigationHandler("tvShows")}
                  className={`${
                    watchlistNavigation === "tvShows" &&
                    classes["active_navigation_state"]
                  } ${classes["watchlist_navigation--BTN"]}`}
                >
                  tv Shows
                </button>
              </div>
            </div>
          </header>

          <hr />

          <section className={classes["watchlist_shows--BLOCK"]}>
            {watchlistIsLoading ? (
              <LoadingModal spacedState={true} />
            ) : watchlistError ? (
              <div className={classes["error_modal--EL"]}>
                <div className={classes["error_content_block--EL"]}>
                  <p className={classes["error_message--EL"]}>
                    Something went wrong, please try again later.
                  </p>
                </div>
              </div>
            ) : watchlistNavigation === "movies" ? (
              !!userWatchlistMovies && !!userWatchlistMovies.length ? (
                <div className={classes["watchlist_shows_content--CONTAINER"]}>
                  {userWatchlistMovies.map(
                    ({
                      id,
                      title,
                      tagline,
                      genres,
                      poster_path,
                      release_date,
                    }) => {
                      return (
                        <div
                          key={id}
                          href={`/account/${accountID}/movies/${id}`}
                          className={classes["watchlist_show--CARD"]}
                        >
                          <div
                            className={
                              classes["watchlist_show_card_content--CONTAINER"]
                            }
                          >
                            <Link href={`/account/${accountID}/movies/${id}`}>
                              <a
                                className={
                                  classes["watchlist_show_image--WRAPPER"]
                                }
                              >
                                {!!poster_path ? (
                                  <img
                                    src={`https://www.themoviedb.org/t/p/original${poster_path}`}
                                    alt={`${title}'s poster`}
                                  />
                                ) : (
                                  <img
                                    src={`/assets/accountPage-assets/default_images/showPosterNotAvailable.png`}
                                    alt={`${title}'s poster not found`}
                                  />
                                )}
                              </a>
                            </Link>
                            <div
                              className={
                                classes["watchlist_show_details--CONTAINER"]
                              }
                            >
                              <h3
                                className={classes["watchlist_show_title--EL"]}
                              >
                                {title}
                              </h3>
                              <span
                                className={
                                  classes["watchlist_show_categoties--EL"]
                                }
                              >
                                {!!genres
                                  ? genresReformationHandler(genres)
                                  : tagline || release_date}
                              </span>
                            </div>
                            <button
                              className={classes["remove_from_watchlist--BTN"]}
                              onClick={() =>
                                removeShowFromWatchlistDB___Handler(
                                  accountID,
                                  id,
                                  "movies"
                                )
                              }
                            >
                              <img
                                src="/assets/accountPage-assets/icons/trash.png"
                                alt="trash icon"
                              />
                            </button>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              ) : (
                <div className={classes["error_modal--EL"]}>
                  <div className={classes["error_content_block--EL"]}>
                    <p className={classes["error_message--EL"]}>
                      Your movies watchlist is empty.
                    </p>
                  </div>
                </div>
              )
            ) : !!userWatchlistTvShows && !!userWatchlistTvShows.length ? (
              <div className={classes["watchlist_shows_content--CONTAINER"]}>
                {userWatchlistTvShows.map(
                  ({
                    id,
                    name,
                    tagline,
                    genres,
                    poster_path,
                    first_air_date,
                  }) => {
                    return (
                      <div
                        key={id}
                        href={`/account/${accountID}/movies/${id}`}
                        className={classes["watchlist_show--CARD"]}
                      >
                        <div
                          className={
                            classes["watchlist_show_card_content--CONTAINER"]
                          }
                        >
                          <Link href={`/account/${accountID}/tvShows/${id}`}>
                            <a
                              className={
                                classes["watchlist_show_image--WRAPPER"]
                              }
                            >
                              {!!poster_path ? (
                                <img
                                  src={`https://www.themoviedb.org/t/p/original${poster_path}`}
                                  alt={`${name}'s poster`}
                                />
                              ) : (
                                <img
                                  src={`/assets/accountPage-assets/default_images/showPosterNotAvailable.png`}
                                  alt={`${name}'s poster not found`}
                                />
                              )}
                            </a>
                          </Link>
                          <div
                            className={
                              classes["watchlist_show_details--CONTAINER"]
                            }
                          >
                            <h3 className={classes["watchlist_show_title--EL"]}>
                              {name}
                            </h3>
                            <span
                              className={
                                classes["watchlist_show_categoties--EL"]
                              }
                            >
                              {!!genres
                                ? genresReformationHandler(genres)
                                : tagline || first_air_date}
                            </span>
                          </div>
                          <button
                            className={classes["remove_from_watchlist--BTN"]}
                            onClick={() =>
                              removeShowFromWatchlistDB___Handler(
                                accountID,
                                id,
                                "tvShows"
                              )
                            }
                          >
                            <img
                              src="/assets/accountPage-assets/icons/trash.png"
                              alt="trash icon"
                            />
                          </button>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            ) : (
              <div className={classes["error_modal--EL"]}>
                <div className={classes["error_content_block--EL"]}>
                  <p className={classes["error_message--EL"]}>
                    Your TV Shows watchlist is empty.
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>
      </AccountLayout>
    </Fragment>
  );
};

export default Watchlist;
