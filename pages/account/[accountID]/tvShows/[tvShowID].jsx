import { Fragment, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { useFetchDetails } from "@lib/customHooks/useFetchDetails";
import { useWatchlist } from "@customHooks/useWatchlist";

import ShowDetailsPageLayout from "@Layout-Comps/ShowDetailsPageLayout";

import classes from "@styles/showDetailsPage.module.css";

const TvShow = () => {

  const {
    fetchShowDetailsHandler,
    showDetails,
    similarShows,
    showTrailerDetails,
    isLoading,
    error,
  } = useFetchDetails("tvShow");
  const { fetchUserWatchlistFromDB___Handler } = useWatchlist();

  const {query: routerQuery} = useRouter();
  const { accountID, tvShowID } = routerQuery;

  useEffect(() => {
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

      <ShowDetailsPageLayout 
        accountID={accountID}
        showDetails={showDetails}
        similarShowsList={similarShows}
        showTrailerDetails={showTrailerDetails}
        isLoading={isLoading}
        error={error}
        type="tvShows"
      />
    </Fragment>
  );
};

export default TvShow;