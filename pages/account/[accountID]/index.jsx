import { Fragment, useEffect, useContext } from "react";
import Head from "next/head";

// Custom React Hooks
import { useFetchDetails } from "../../../lib/customHooks/useFetchDetails";

// custum Contexts
import { GenresContext } from "../../../lib/genresContext";

// Custom Components
import ShowsUi from "../../../components/Ui/ShowsUi";
import LoadingModal from "../../../components/Ui/AccountModals/LoadingModal";
import AccountLayout from "../../../components/Layout/AccountLayout";

import classes from "../../../style/home.module.css";

const account = () => {
  const { fetchGenresHandler } = useContext(GenresContext);

  const {
    error,
    isLoading,
    fetchAccountHomePageShowsHandler,
    accountHomePageShows,
  } = useFetchDetails();

  useEffect(() => {
    fetchAccountHomePageShowsHandler();
    fetchGenresHandler();
  }, []);

  return (
    <Fragment>
      <Head>
        <title> Stream TV and movies Live and Online | Hulu</title>
      </Head>
      <AccountLayout accountPage="home" showNavbar={true}>
        {isLoading ? (
          <LoadingModal largeHeight={true} />
        ) : error ? (
          <div className={classes["error_modal--EL"]}>
            <div className={classes["error_content_block--EL"]}>
              <p className={classes["error_message--EL"]}>
                Something went wrong, please try again later.
              </p>
            </div>
          </div>
        ) : (
          !!accountHomePageShows && (
            <section
              id="movies--SECTION"
              className={classes["movies--SECTION"]}
            >
              <div className={classes["shows_Highlighter--EL"]}>
                <div className={classes["showsType--CONTAINER"]}>
                  <h4 className={classes["showsType_header--EL"]}>
                    trending movies
                  </h4>

                  <ShowsUi
                    type="movies"
                    showsData={accountHomePageShows.trendingMovies.results}
                  />
                </div>

                <div className={classes["showsType--CONTAINER"]}>
                  <h4 className={classes["showsType_header--EL"]}>
                    trending tv shows
                  </h4>

                  <ShowsUi
                    type="tvShows"
                    showsData={accountHomePageShows.trendingTvShows.results}
                  />
                </div>
                <div className={classes["showsType--CONTAINER"]}>
                  <h4 className={classes["showsType_header--EL"]}>
                    best Movies of 2021
                  </h4>

                  <ShowsUi
                    type="movies"
                    showsData={accountHomePageShows.bestMoviesOf2021.results}
                  />
                </div>
                <div className={classes["showsType--CONTAINER"]}>
                  <h4 className={classes["showsType_header--EL"]}>
                    best TV Shows of 2021
                  </h4>

                  <ShowsUi
                    type="tvShows"
                    showsData={accountHomePageShows.bestTvShowsOf2021.results}
                  />
                </div>
              </div>
            </section>
          )
        )}
      </AccountLayout>
    </Fragment>
  );
};

export default account;
