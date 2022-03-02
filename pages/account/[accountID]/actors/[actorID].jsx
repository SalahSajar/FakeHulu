import React, { useEffect, Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { useFetchDetails } from "../../../../lib/customHooks/useFetchDetails";

import AccountLayout from "../../../../components/Layout/AccountLayout";
import ShowsSlider from "../../../../components/Ui/ShowsSlider";

import classes from "../../../../style/actor.module.css";
import LoadingModal from "../../../../components/Ui/AccountModals/LoadingModal";

const Actor = () => {
  const { actorID } = useRouter().query;

  const {
    fetchActorDetailsHandler,
    actorDetails,
    actorMovies,
    actorTvShows,
    actorSocialMedia,
    isLoading,
    error,
  } = useFetchDetails();

  useEffect(() => {
    if (!!actorID) {
      fetchActorDetailsHandler(actorID);
    }
  }, [actorID]);

  return (
    <Fragment>
      <Head>
        {!!actorDetails ? (
          <title> {actorDetails.name} | Hulu</title>
        ) : (
          <title> Loading ... | Hulu</title>
        )}
      </Head>
      <AccountLayout showNavbar={true} accountPage="actors">
        {isLoading ? (
          <LoadingModal spacedState={true} />
        ) : error ? (
          <div className={classes["loading_modal--EL"]}>
            <div className={classes["loading_block--EL"]}>
              <img
                src="/assets/accountPage-assets/icons/loading.gif"
                alt="loading"
              />
            </div>
          </div>
        ) : (
          <div className={classes["actor--BLOCK"]}>
            {!!actorDetails && (
              <div className={classes["actor_content--CONTAINER"]}>
                <div className={classes["actor_details--BLOCK"]}>
                  <div className={classes["actor_details_content--CONTAINER"]}>
                    <aside className={classes["actor_poster--CONTAINER"]}>
                      <img
                        src={
                          !actorDetails.profile_path
                            ? `assets/accountPage-assets/default_images/default-${
                                actorDetails.gender === 1 ? "female" : "male"
                              }-avatar.jpg`
                            : `https://www.themoviedb.org/t/p/original${actorDetails.profile_path}`
                        }
                        alt="poster"
                        loading="eager"
                      />
                    </aside>
                    <div className={classes["actor_infos--CONTAINER"]}>
                      <div className={classes["actor_infos_header--EL"]}>
                        <h2 className={classes["actor_name--EL"]}>
                          {actorDetails.name}
                        </h2>
                        <span className={classes["actor_birth_infos--EL"]}>
                          {actorDetails.gender === 1 ? "female" : "male"}{" "}
                          &#x2726; {actorDetails.birthday}{" "}
                          {!!actorDetails.deathday &&
                            `to ${actorDetails.deathday}`}{" "}
                          (
                          {!!actorDetails.deathday
                            ? Math.floor(
                                (new Date(actorDetails.deathday).getTime() -
                                  new Date(actorDetails.birthday).getTime()) /
                                  31536000000
                              )
                            : Math.floor(
                                (new Date().getTime() -
                                  new Date(actorDetails.birthday).getTime()) /
                                  31536000000
                              )}{" "}
                          years old) &#x2726; {actorDetails.place_of_birth}
                        </span>
                      </div>
                      {!!actorDetails.biography && (
                        <div className={classes["actor_Biography--WRAPPER"]}>
                          <h5
                            className={`${classes["actor_info_header--EL"]} ${classes["actor_biography_header--EL"]}`}
                          >
                            Biography
                          </h5>
                          <p className={classes["actor_biography--EL"]}>
                            {actorDetails.biography}
                          </p>
                        </div>
                      )}
                      {!actorSocialMedia.instagram_id &&
                      !actorSocialMedia.twitter_id &&
                      !actorSocialMedia.facebook_id ? (
                        ""
                      ) : (
                        <div className={classes["actor_socialMedia--WRAPPER"]}>
                          <h5
                            className={`${classes["actor_info_header--EL"]} ${classes["actor_biography_header--EL"]}`}
                          >
                            social media
                          </h5>

                          <ul
                            className={classes["actor_socialMedia_links--LIST"]}
                          >
                            {!!actorSocialMedia.instagram_id && (
                              <li>
                                <a
                                  href={`https://www.instagram.com/${actorSocialMedia.instagram_id}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src="/assets/accountPage-assets/icons/instagram.png"
                                    alt={` ininstagram`}
                                  />
                                </a>
                              </li>
                            )}
                            {!!actorSocialMedia.twitter_id && (
                              <li>
                                <a
                                  href={`https://twitter.com/${actorSocialMedia.twitter_id}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src="/assets/accountPage-assets/icons/twitter.png"
                                    alt={` twitter`}
                                  />
                                </a>
                              </li>
                            )}
                            {!!actorSocialMedia.facebook_id && (
                              <li>
                                <a
                                  href={`https://www.facebook.com/${actorSocialMedia.facebook_id}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src="/assets/accountPage-assets/icons/facebook.png"
                                    alt={` facebook`}
                                  />
                                </a>
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className={classes["actor_work--CONTAINER"]}>
                  {actorMovies.length && (
                    <div
                      className={`${classes["actor_work--BLOCK"]} ${classes["actor_movies--BLOCK"]}`}
                    >
                      <h3 className={classes["actor_work_header--EL"]}>
                        movies {actorDetails.name} was in:
                      </h3>
                      <ShowsSlider
                        showsArr={actorMovies.sort(
                          (a, b) => b.popularity - a.popularity
                        )}
                        type="movies"
                      />
                    </div>
                  )}

                  {!!actorTvShows.length && (
                    <div
                      className={`${classes["actor_work--BLOCK"]} ${classes["actor_tvShows--BLOCK"]}`}
                    >
                      <h3 className={classes["actor_work_header--EL"]}>
                        TV shows {actorDetails.name} was in:
                      </h3>
                      <ShowsSlider
                        showsArr={actorTvShows.sort(
                          (a, b) => b.popularity - a.popularity
                        )}
                        type="tvShows"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </AccountLayout>
    </Fragment>
  );
};

export default Actor;
