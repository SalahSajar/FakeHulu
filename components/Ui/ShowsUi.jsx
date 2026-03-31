import { useContext, useEffect, Fragment } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import { GenresContext } from "@lib/genresContext";

import classes from "@styles/ShowsUi.module.css";

const ShowsUi = ({ type, showsData }) => {
  const router = useRouter();

  const { movieGenres, tvShowGenres } = useContext(GenresContext);
  const showGenres = type === "tvShows" ? tvShowGenres : movieGenres;

  const toShowPath = `/account/${router.query.accountID}`;

  const findGenresHandler = (genres) => {
    const GenresResult = genres.reduce((acc, genre) => {
      acc.push(showGenres.find((showGenre) => showGenre.id === genre).name);

      return acc;
    }, []).join(", ");

    return GenresResult;
  };

  return (
    <Fragment>
      <div className={classes["shows--CONTAINER"]}>
        {showsData.map(showBasicDetails => {
              const {
                id,
                title,
                original_title,
                original_name,
                poster_path,
                release_date,
                first_air_date,
                genre_ids
              } = showBasicDetails;

              const showTitle = type === "movies" ? (title || original_title) : original_name;
              const showReleaseDate = type === "movies" ? release_date : first_air_date;

              return (
                <article key={id} className={classes["movie_card--EL"]}>
                  <div className={classes["movie_content--CONTAINER"]}>
                    <Link className={classes["movieDetails__LINK"]} href={`${toShowPath}/${type}/${id}`}>
                      <span className={classes["movie_img--WRAPPER"]}>
                        {poster_path ? (
                          <Image
                            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                            width={300}
                            height={300}
                            alt={`${showTitle} poster`}
                          />
                        ) : (
                          <Image
                            src="/assets/accountPage-assets/default_images/showPosterNotAvailable.png"
                            width={300}
                            height={300}
                            alt={`${showTitle} poster not Found`}
                          />
                        )}
                      </span>
                    </Link>
                    
                    <div className={classes["movie_details--CONTAINER"]}>
                      <h3 className={classes["movie_title--EL"]}> {showTitle} </h3>
                      <div className={classes["movie_extraDetails--CONTAINER"]}>
                        <span className={classes["movie_releaseDate--EL"]}> {showReleaseDate} </span>
                        <span className={classes["movie_genre--EL"]}>
                          {!!movieGenres && genre_ids.length && findGenresHandler(genre_ids)} </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }
          )}
      </div>
    </Fragment>
  );
};

export default ShowsUi;
