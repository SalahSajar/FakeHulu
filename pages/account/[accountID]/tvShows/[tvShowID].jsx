import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import { useFetchDetails } from "../../../../lib/customHooks/useFetchDetails";
import { useWatchlist } from "../../../../lib/customHooks/useWatchlist";

import AccountLayout from "../../../../components/Layout/AccountLayout";

import TrailerModal from "../../../../components/Ui/AccountModals/TrailerModal";
import LoadingModal from "../../../../components/Ui/AccountModals/LoadingModal";

import ShowsSlider from "../../../../components/Ui/ShowsSlider";
import ShowDetailsUi from "../../../../components/Ui/ShowDetailsUi";

import classes from "../../../../style/tvShow.module.css";

const TvShow = () => {
  const [displayTrailerModal, setDisplayTrailerModal] = useState(false);

  const {
    fetchShowDetailsHandler,
    showDetails,
    simularShows,
    showTrailerDetails,
    isLoading,
    error,
  } = useFetchDetails("tvShow");
  const { fetchUserWatchlistFromDB___Handler } = useWatchlist();

  const router = useRouter();
  const { accountID, tvShowID } = router.query;

  const displayTrailerModalHandler = (state) => {
    setDisplayTrailerModal(state);
  };

  useEffect(async () => {
    if (tvShowID) {
      fetchShowDetailsHandler(tvShowID);
      fetchUserWatchlistFromDB___Handler(accountID, "tvShows");
    }
  }, [tvShowID]);

  return (
    <Fragment>
      <Head>
        {!!showDetails ? (
          <title>{showDetails.name || showDetails.original_name} | Hulu</title>
        ) : (
          <title>Loading ... | Hulu</title>
        )}
      </Head>
      <AccountLayout showNavbar={false}>
        <main className={classes["tvShow_details--BLOCK"]}>
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

          <section className={classes["tvShow_details_pageHeader--EL"]}>
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
                  type="tvShows"
                  showDetails={showDetails}
                  displayTrailerModalHandler={displayTrailerModalHandler}
                />
              )
            )}
          </section>
          {!isLoading && !error && !!simularShows.length ? (
            <section className={classes["tvShow_recommendations--BLOCK"]}>
              <h2 className={classes["tvShow_recommendations_title--EL"]}>
                Recommendations
              </h2>
              {!!simularShows && (
                <ShowsSlider type="tvShows" showsArr={simularShows} />
              )}
            </section>
          ) : (
            ""
          )}
        </main>
      </AccountLayout>
    </Fragment>
  );
};

export default TvShow;
