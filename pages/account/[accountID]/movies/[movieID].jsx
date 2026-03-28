import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { useFetchDetails } from "@lib/customHooks/useFetchDetails";
import { useWatchlist } from "@customHooks/useWatchlist";

import ShowDetailsPageLayout from "@Layout-Comps/ShowDetailsPageLayout";

import classes from "@styles/showDetailsPage.module.css";

const Movie = () => {

  const {
    fetchShowDetailsHandler,
    showDetails,
    similarShows,
    showTrailerDetails,
    isLoading,
    error,
  } = useFetchDetails("movie");
  const { fetchUserWatchlistFromDB___Handler } = useWatchlist();

  const router = useRouter();
  const { accountID, movieID } = router.query;


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

      <ShowDetailsPageLayout 
        accountID={accountID}
        showDetails={showDetails}
        similarShowsList={similarShows}
        showTrailerDetails={showTrailerDetails}
        isLoading={isLoading}
        error={error}
        type="movies"
      />
    </Fragment>
  );
};

export default Movie;
