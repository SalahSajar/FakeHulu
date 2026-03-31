import React, { useEffect, Fragment, useContext } from "react";
import Head from "next/head";

import { SearchContext } from "@lib/searchContext";

import SearchLayout from "@Layout-Comps/SearchLayout";

import SearchResultsModal from "@Ui-Comps/AccountModals/SearchResultsModal";
import LoadingModal from "@Ui-Comps/AccountModals/LoadingModal";

import classes from "@styles/movies.module.css";

const Movies = () => {
  const { searchTrendingShows, showsFounded, loading, error } =
    useContext(SearchContext);

  useEffect(() => {
    searchTrendingShows("tv");
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Explore TV Shows | Hulu</title>
      </Head>
      <SearchLayout type="tv" accountPage="tvShows">
        <section className={classes["searchResults_section--EL"]}>
          <div className={classes["searchResults_content--BLOCK"]}>
            {loading ? (
              <LoadingModal />
            ) : error ? (
              <div className={classes["error_modal--EL"]}>
                <div className={classes["error_content_block--EL"]}>
                  <p className={classes["error_message--EL"]}>
                    Something went wrong, please try again later.
                  </p>
                </div>
              </div>
            ) : (
              !!showsFounded &&
              (showsFounded.length ? (
                <SearchResultsModal
                  searchResults={showsFounded}
                  type="tvShows"
                />
              ) : (
                <div className={classes["error_modal--EL"]}>
                  <div className={classes["error_content_block--EL"]}>
                    <p className={classes["error_message--EL"]}>
                      TV Show not found.
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </SearchLayout>
    </Fragment>
  );
};

export default Movies;
