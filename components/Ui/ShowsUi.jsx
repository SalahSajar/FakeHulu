import { useContext, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { GenresContext } from "../../lib/genresContext";

import classes from "../../style/ShowsUi.module.css";

const ShowsUi = ({ type, showsData }) => {
  const router = useRouter();
  const { movieGenres, tvShowGenres } = useContext(GenresContext);
  const toShowPath = `/account/${router.query.accountID}`;

  const findGenresHandler = (genres) => {
    let GenresResult;

    if (type === "movies") {
      GenresResult = genres
        .reduce((acc, genre) => {
          acc.push(
            movieGenres.find((movieGenre) => movieGenre.id === genre).name
          );

          return acc;
        }, [])
        .join(", ");
    }
    if (type === "tvShows") {
      GenresResult = genres
        .reduce((acc, genre) => {
          acc.push(
            tvShowGenres.find((tvShowGenre) => tvShowGenre.id === genre).name
          );

          return acc;
        }, [])
        .join(", ");
    }

    return GenresResult;
  };

  return (
    <Fragment>
      <div className={classes["shows--CONTAINER"]}>
        {type === "movies" &&
          showsData.map(
            ({
              id,
              title,
              original_title,
              poster_path,
              release_date,
              genre_ids,
            }) => {
              return (
                <div key={id} className={classes["movie_card--EL"]}>
                  <div className={classes["movie_content--CONTAINER"]}>
                    <Link href={`${toShowPath}/movies/${id}`}>
                      <a className={classes["movie_img--WRAPPER"]}>
                        {poster_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/original${poster_path}`}
                            alt={`${title || original_title} poster`}
                          />
                        ) : (
                          <img
                            src="/assets/accountPage-assets/default_images/showPosterNotAvailable.png"
                            alt={`${title || original_title} poster`}
                          />
                        )}
                      </a>
                    </Link>
                    <div className={classes["movie_details--CONTAINER"]}>
                      <h3 className={classes["movie_title--EL"]}>
                        {title || original_title}
                      </h3>
                      <div className={classes["movie_extraDetails--CONTAINER"]}>
                        <span className={classes["movie_releaseDate--EL"]}>
                          {release_date}
                        </span>
                        <span className={classes["movie_genre--EL"]}>
                          {!!movieGenres &&
                            genre_ids.length &&
                            findGenresHandler(genre_ids)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}

        {type === "tvShows" &&
          showsData.map(
            ({
              id,
              poster_path,
              name,
              original_name,
              first_air_date,
              genre_ids,
            }) => {
              return (
                <div key={id} className={classes["movie_card--EL"]}>
                  <div className={classes["movie_content--CONTAINER"]}>
                    <Link href={`${toShowPath}/tvShows/${id}`}>
                      <a className={classes["movie_img--WRAPPER"]}>
                        {poster_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/original${poster_path}`}
                            alt={`${name || original_name} poster`}
                          />
                        ) : (
                          <img
                            src="/assets/accountPage-assets/default_images/showPosterNotAvailable.png"
                            alt={`${name || original_name} poster`}
                          />
                        )}
                      </a>
                    </Link>
                    <div className={classes["movie_details--CONTAINER"]}>
                      <h3 className={classes["movie_title--EL"]}>
                        {name || original_name}
                      </h3>
                      <div className={classes["movie_extraDetails--CONTAINER"]}>
                        <span className={classes["movie_releaseDate--EL"]}>
                          {first_air_date}
                        </span>
                        <span className={classes["movie_genre--EL"]}>
                          {!!tvShowGenres &&
                            genre_ids.length &&
                            findGenresHandler(genre_ids)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </Fragment>
  );
};

export default ShowsUi;
