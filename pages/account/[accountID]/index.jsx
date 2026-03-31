import { Fragment, useEffect, useContext } from "react";
import Head from "next/head";

// Custom React Hooks
import { useFetchDetails } from "@customHooks/useFetchDetails";

// custum Contexts
import { GenresContext } from "@lib/genresContext";

// Custom Components
import ShowsUi from "@Ui-Comps/ShowsUi";
import LoadingModal from "@Ui-Comps/AccountModals/LoadingModal";
import AccountLayout from "@Layout-Comps/AccountLayout";

import classes from "@styles/home.module.css";

const account = () => {
  const { fetchGenresHandler } = useContext(GenresContext);

  const year = (new Date().getFullYear()) - 1;

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

  console.log(accountHomePageShows)

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
            <main id="movies--SECTION" className={classes["movies--SECTION"]}>
              <div className={classes["shows_Highlighter--EL"]}>
                <section className={classes["showsType--CONTAINER"]}>
                  <h4 className={classes["showsType_header--EL"]}> trending movies </h4>

                  <ShowsUi
                    type="movies"
                    showsData={accountHomePageShows.trendingMovies.results}
                  />
                </section>

                <section className={classes["showsType--CONTAINER"]}>
                  <h4 className={classes["showsType_header--EL"]}>trending tv shows</h4>

                  <ShowsUi
                    type="tvShows"
                    showsData={accountHomePageShows.trendingTvShows.results}
                  />
                </section>
                <section className={classes["showsType--CONTAINER"]}>
                  <h4 className={classes["showsType_header--EL"]}>best Movies in Historty</h4>

                  <ShowsUi
                    type="movies"
                    showsData={accountHomePageShows.topRatedMovies.results}
                  />
                </section>
                <section className={classes["showsType--CONTAINER"]}>
                  <h4 className={classes["showsType_header--EL"]}>best TV Shows in Historty</h4>

                  <ShowsUi
                    type="tvShows"
                    showsData={accountHomePageShows.topRatedTvShows.results}
                  />
                </section>
              </div>
            </main>
          )
        )}
      </AccountLayout>
    </Fragment>
  );
};

export default account;
