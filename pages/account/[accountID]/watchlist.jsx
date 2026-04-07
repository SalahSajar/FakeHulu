import React, { useState, useContext, useEffect, Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import { useWatchlist } from "@customHooks/useWatchlist";

import { UserWatchlistContext } from "@lib/userWatchlistContext";

import AccountLayout from "@Layout-Comps/AccountLayout";
import LoadingModal from "@Ui-Comps/AccountModals/LoadingModal";

import classes from "@styles/watchlist.module.css";

const Watchlist = () => {
  const [watchlistNavigation, setWatchlistNavigation] = useState("movies");

  const {
    fetchUserWatchlistFromDB___Handler,
    removeShowFromWatchlistDB___Handler,
    watchlistIsLoading,
    watchlistError,
  } = useWatchlist();

  const { userWatchlistMovies, userWatchlistTvShows } = useContext(UserWatchlistContext);

  const activeShowsList = watchlistNavigation === "movies" ? userWatchlistMovies : userWatchlistTvShows;

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

  const genresReformationHandler = (genres) => genres.map((genre) => genre.name).join(", ");

  return (
    <Fragment>
      <Head>
        <title>Watchlist | Hulu</title>
      </Head>

      <AccountLayout accountPage="watchlist" showNavbar="true">
        <div className={classes["watchlist--BLOCK"]}>
          <header className={classes["watchlist_header--CONTAINER"]}>
            <div className={classes["watchlict_navigation--BLOCK"]}>
              <div className={`f-center-between ${classes["watchlict_navigation_content--WRAPPER"]}`} >
                <button type="button" onClick={() => changeWatchlistNavigationHandler("movies")}
                  className={`${watchlistNavigation === "movies" &&classes["active_navigation_state"]} ${classes["watchlist_navigation--BTN"]}`}>
                    movies
                </button>

                <button type="button" onClick={() => changeWatchlistNavigationHandler("tvShows")}
                  className={`${ watchlistNavigation === "tvShows" && classes["active_navigation_state"] } ${classes["watchlist_navigation--BTN"]}`}>
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
                  <p className={classes["error_message--EL"]}>Something went wrong, please try again later.</p>
                </div>
              </div>
            ) : !!activeShowsList?.length ? (
                <div className={classes["watchlist_shows_content--CONTAINER"]}>
                  {activeShowsList.map(
                    ({
                      id,
                      title,
                      name,
                      tagline,
                      genres,
                      poster_path,
                      release_date,
                      first_air_date,
                    }) => {
                      const showTitle = watchlistNavigation === "movies" ? title : name;
                      const showReleaseDate = watchlistNavigation === "movies" ? release_date : first_air_date;

                      return (
                        <div key={id} className={classes["watchlist_show--CARD"]}>
                          <div className={classes["watchlist_show_card_content--CONTAINER"]}>
                            <Link href={`/account/${accountID}/${watchlistNavigation}/${id}`}>
                              <span className={classes["watchlist_show_image--WRAPPER"]}>
                                {!!poster_path ? (
                                  <img
                                    src={`https://www.themoviedb.org/t/p/w300${poster_path}`}
                                    alt={`${showTitle}'s poster`}
                                  />
                                ) : (
                                  <img
                                    src={`/assets/accountPage-assets/default_images/showPosterNotAvailable.png`}
                                    alt={`${showTitle}'s poster not found`}
                                  />
                                )}
                              </span>
                            </Link>

                            <div className={classes["watchlist_show_details--CONTAINER"]} >
                              <h3 className={classes["watchlist_show_title--EL"]} >{showTitle}</h3>

                              <span className={classes["watchlist_show_categoties--EL"]} >
                                {!!genres ? genresReformationHandler(genres) : tagline || showReleaseDate}
                              </span>
                            </div>
                            <button className={classes["remove_from_watchlist--BTN"]} onClick={() => removeShowFromWatchlistDB___Handler( accountID, id, watchlistNavigation )}>
                              <img src="/assets/accountPage-assets/icons/trash.png" alt="trash icon" />
                            </button>
                          </div>
                        </div>
                      )}
                  )}
                </div>
              ) : (
                <div className={classes["error_modal--EL"]}>
                  <div className={classes["error_content_block--EL"]}>
                    <p className={classes["error_message--EL"]}>Your movies watchlist is empty.</p>
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
