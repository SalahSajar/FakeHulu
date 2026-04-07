import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import classes from "@styles/ShowsSlider.module.css";

const ShowsSlider = ({ children, showsArr, type }) => {
  const { accountID } = useRouter().query;

  return (
    <section className={classes["similarShowRecommendations__BLOCK"]}>
      {!!children && <h2 className={classes["similarShowRecommendations__TITLE"]}>{children}</h2>}

      <div className={classes["similarShowRecommendations__LIST"]}>
        {showsArr.map(({id, title, original_title, name, original_name, poster_path }) => {
          const showTitle = type === "movies" ? (title || original_title) : (name || original_name);

          return (
            <li className={classes["similarShowRecommendation__LIST_ITEM"]}>
              <Link key={id} href={`/account/${accountID}/${type}/${id}`}>
                <div className={classes["similarShowRecommendation__CONTENT_WRAPPER"]}>
                  <div className={classes["similarShowRecommendation__THUMBNAIL_WRAPPER"]} >
                    <img loading="lazy"
                      src={
                        !poster_path
                          ? "/assets/accountPage-assets/default_images/showPosterNotAvailable.png"
                          : `https://www.themoviedb.org/t/p/w300${poster_path}`
                      }
                      alt={showTitle}
                    />
                  </div>
                  <h3 className={classes["similarShowRecommendation__TITLE"]}> {showTitle} </h3>
                </div>
              </Link>
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default ShowsSlider;
