import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import { useFetchDetails } from "../../../../lib/customHooks/useFetchDetails";
import { useWatchlist } from "../../../../lib/customHooks/useWatchlist";

import AccountLayout from "../../../../components/Layout/AccountLayout";
import ShowDetailsUi from "../../../../components/Ui/ShowDetailsUi";

import TrailerModal from "../../../../components/Ui/AccountModals/TrailerModal";
import LoadingModal from "../../../../components/Ui/AccountModals/LoadingModal";

import ShowsSlider from "../../../../components/Ui/ShowsSlider";

import classes from "../../../../style/movie.module.css";

const Movie = () => {
  const [displayTrailerModal, setDisplayTrailerModal] = useState(false);

  const {
    fetchShowDetailsHandler,
    showDetails,
    simularShows,
    showTrailerDetails,
    isLoading,
    error,
  } = useFetchDetails("movie");
  const { fetchUserWatchlistFromDB___Handler } = useWatchlist();

  const router = useRouter();
  const { accountID, movieID } = router.query;

  const displayTrailerModalHandler = (state) => {
    setDisplayTrailerModal(state);
  };

  useEffect(() => {
    if (movieID) {
      fetchShowDetailsHandler(movieID);
      fetchUserWatchlistFromDB___Handler(accountID, "movies");
    }
  }, [movieID]);

  return (
    <Fragment>
      <Head>
        {!!showDetails ? (
          <title>
            {showDetails.title || showDetails.original_title} | Hulu
          </title>
        ) : (
          <title>Loading ... | Hulu</title>
        )}
      </Head>
      <AccountLayout showNavbar={false}>
        <main className={classes["movie_details--BLOCK"]}>
          {/* Trailer Modal */}
          {showTrailerDetails && (
            <TrailerModal
              displayTrailerModalHandler={displayTrailerModalHandler}
              displayTrailerModal={displayTrailerModal}
              showTrailerDetails={showTrailerDetails}
            />
          )}
          {/* //////////////////////////////////////////// */}

          {/* Return To Home Page */}
          <Link href={`/account/${accountID}`}>
            <a className={classes["return_link--EL"]}>
              <img
                src="/assets/accountPage-assets/icons/return-arrow.png"
                alt="return"
              />
            </a>
          </Link>
          {/* //////////////////////////////////////////// */}

          <section className={classes["movie_details_pageHeader--EL"]}>
            {isLoading ? (
              <LoadingModal />
            ) : error ? (
              <div className={classes["error_modal--EL"]}>
                <div className={classes["error_content_block--EL"]}>
                  <img
                    className={classes["error_icon--IMG"]}
                    src="/assets/accountPage-assets/icons/error-cloud.png"
                    alt="error"
                  />
                  <p className={classes["error_message--EL"]}>
                    Something went wrong, please try again later.
                  </p>
                  <button
                    type="button"
                    className={classes["reload--BTN"]}
                    onClick={() => router.reload()}
                  >
                    reload
                  </button>
                </div>
              </div>
            ) : (
              !!showDetails && (
                <ShowDetailsUi
                  type="movies"
                  showDetails={showDetails}
                  displayTrailerModalHandler={displayTrailerModalHandler}
                />
              )
            )}
          </section>
          {!isLoading && !error && !!simularShows.length ? (
            <section className={classes["movie_recommendations--BLOCK"]}>
              <h2 className={classes["movie_recommendations_title--EL"]}>
                Recommendations
              </h2>
              <ShowsSlider type="movies" showsArr={simularShows} />
            </section>
          ) : (
            ""
          )}
        </main>
      </AccountLayout>
    </Fragment>
  );
};

export default Movie;
