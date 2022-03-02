import { useEffect, Fragment, useState, useContext } from "react";

import { SearchContext } from "../../lib/searchContext";

import AccountLayout from "./AccountLayout";

import classes from "../../style/SearchLayout.module.css";

const firstRenderBlocker = true;

const SearchLayout = ({ children, type, accountPage }) => {
  const [searchValue, setSearchValue] = useState("");

  const { searchMostPapularActors, searchTrendingShows, searchHandler } =
    useContext(SearchContext);

  const defaultSearchHandler = () => {
    if (type === "person") searchMostPapularActors();
    if (type !== "person") searchTrendingShows(type);
  };

  const changeSearchHandler = (e) => {
    const inputSearchValue = e.target.value;

    setSearchValue(inputSearchValue);
  };

  const submitSearchHandler = (e) => {
    e.preventDefault();

    searchHandler(searchValue, type);
  };

  useEffect(() => {
    if (firstRenderBlocker) {
      firstRenderBlocker = false;
      return;
    }

    const searchSetTimeout = setTimeout(() => {
      !!searchValue && searchHandler(searchValue, type);
    }, 1000);

    return () => {
      clearTimeout(searchSetTimeout);
    };
  }, [searchValue]);

  return (
    <Fragment>
      <AccountLayout showNavbar={true} accountPage={accountPage}>
        <div className={classes["search--BLOCK"]}>
          <div className={classes["search_header--WRAPPER"]}>
            <div className={classes["search_header_content--CONTAINER"]}>
              {type === "person" && <h2>Search for Your Favorite Actor</h2>}
              {type === "movie" && <h2>Search for Your Favorite Movie</h2>}
              {type === "tv" && <h2>Search for Your Favorite TV Shows</h2>}

              <form
                className={classes["search_form--EL"]}
                onSubmit={(e) => submitSearchHandler(e)}
              >
                <div
                  className={`f-center-center ${classes["search_form_content--WRAPPER"]}`}
                >
                  <input
                    className={classes["search_input--EL"]}
                    type="text"
                    placeholder={
                      type === "person"
                        ? "Search for an Actor"
                        : type === "movie"
                        ? "Search for a Movie"
                        : "Search for a TV Show"
                    }
                    name="search"
                    id="search"
                    onChange={changeSearchHandler}
                  />
                  <button
                    type="submit"
                    className={classes["search_form_submit--BTN"]}
                  >
                    Search
                  </button>
                </div>
              </form>

              <button
                type="button"
                className={classes["defaultSearch--BTN"]}
                onClick={defaultSearchHandler}
              >
                {type === "person" && "most Popular Actors"}
                {type === "movie" && "trending Movies"}
                {type === "tv" && "trending TV Shows"}
              </button>
            </div>
          </div>

          <hr />

          {children}
        </div>
      </AccountLayout>
    </Fragment>
  );
};

export default SearchLayout;
