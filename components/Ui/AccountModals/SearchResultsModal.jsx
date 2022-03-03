import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { GenresContext } from "../../../lib/genresContext";

import classes from "../../../style/searchResultsModal.module.css";

const SearchResultsModal = ({ type, searchResults }) => {
  const { accountID } = useRouter().query;
  const { movieGenresHandler, tvShowGenresHandler, movieGenres, tvShowGenres } =
    useContext(GenresContext);

  const findGenresHandler = (genres) => {
    let GenresResult;

    if (type === "movies") {
      GenresResult = genres
        .reduce((acc, genre) => {
          const genreObj = movieGenres.find(
            (movieGenre) => movieGenre.id === genre
          );

          if (!!genreObj) acc.push(genreObj.name);

          return acc;
        }, [])
        .join(", ");
    }

    if (type === "tvShows") {
      GenresResult = genres
        .reduce((acc, genre) => {
          const genreObj = tvShowGenres.find(
            (tvShowGenre) => tvShowGenre.id === genre
          );

          if (!!genreObj) acc.push(genreObj.name);

          return acc;
        }, [])
        .join(", ");
    }

    return GenresResult;
  };

  useEffect(() => {
    if (type === "movies") movieGenresHandler();
    if (type === "tvShows") tvShowGenresHandler();
  }, []);

  return (
    <div className={classes["searchResults--CONTAINER"]}>
      {searchResults.map((searchResult) => (
        <Link
          key={searchResult.id}
          href={`/account/${accountID}/${type}/${searchResult.id}`}
        >
          <a className={classes["searchResult_card--EL"]}>
            <div className={classes["searchResult_image--WRAPPER"]}>
              {type === "actors" ? (
                !!searchResult.profile_path ? (
                  <img
                    src={`https://www.themoviedb.org/t/p/original${searchResult.profile_path}`}
                    alt={`${searchResult.name}'s profile picture`}
                  />
                ) : (
                  <img
                    src={`/assets/accountPage-assets/default_images/${
                      searchResult.gender === 1
                        ? "default-female-avatar"
                        : "default-male-avatar"
                    }.jpg`}
                    alt={`${searchResult.name}'s profile picture Not Found`}
                  />
                )
              ) : !!searchResult.poster_path ? (
                <img
                  src={`https://www.themoviedb.org/t/p/original${searchResult.poster_path}`}
                  alt={`${searchResult.title || searchResult.name}'s poster`}
                />
              ) : (
                <img
                  src={`/assets/accountPage-assets/default_images/showPosterNotAvailable.png`}
                  alt={`${
                    searchResult.title || searchResult.name
                  }'s poster Not Found`}
                />
              )}
            </div>
            <div className={classes["searchResult_mini_details--CONTAINER"]}>
              <h5 className={classes["searchResult_name--EL"]}>
                {searchResult.name || searchResult.title}
              </h5>

              <span className={classes["searchResult_extra_mini_details--EL"]}>
                {type === "actors"
                  ? searchResult.known_for
                      .map((actorWork) => actorWork.title || actorWork.name)
                      .join(", ")
                  : type === "movies"
                  ? !!movieGenres &&
                    !!searchResult.genre_ids.length &&
                    findGenresHandler(searchResult.genre_ids)
                  : !!tvShowGenres &&
                    !!searchResult.genre_ids.length &&
                    findGenresHandler(searchResult.genre_ids)}
              </span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default SearchResultsModal;
