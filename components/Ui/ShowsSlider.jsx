import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import classes from "../../style/ShowsSlider.module.css";

const ShowsSlider = ({ showsArr, type }) => {
  const { accountID } = useRouter().query;

  return (
    <div className={classes["show_recommendations_content--EL"]}>
      {type === "movies"
        ? showsArr.map(({ poster_path, title, original_title, id }) => {
            return (
              <Link key={id} href={`/account/${accountID}/movies/${id}`}>
                <a className={classes["show_recommendation_block--EL"]}>
                  <div
                    className={classes["show_recommendation_image--WRAPPER"]}
                  >
                    <img
                      loading="lazy"
                      src={
                        !poster_path
                          ? "/assets/accountPage-assets/default_images/showPosterNotAvailable.png"
                          : `https://www.themoviedb.org/t/p/original${poster_path}`
                      }
                      alt={`${title || original_title}`}
                    />
                  </div>
                  <h3 className={classes["show_recommendation_title--EL"]}>
                    {title || original_title}
                  </h3>
                </a>
              </Link>
            );
          })
        : showsArr.map(({ poster_path, name, original_name, id }) => {
            return (
              <Link key={id} href={`/account/${accountID}/tvShows/${id}`}>
                <a className={classes["show_recommendation_block--EL"]}>
                  <div
                    className={classes["show_recommendation_image--WRAPPER"]}
                  >
                    <img
                      loading="lazy"
                      src={
                        !poster_path
                          ? "/assets/accountPage-assets/default_images/showPosterNotAvailable.png"
                          : `https://www.themoviedb.org/t/p/original${poster_path}`
                      }
                      alt={`${name || original_name}`}
                    />
                  </div>
                  <h3 className={classes["show_recommendation_title--EL"]}>
                    {name || original_name}
                  </h3>
                </a>
              </Link>
            );
          })}
    </div>
  );
};

export default ShowsSlider;
