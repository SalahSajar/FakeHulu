import { useEffect, useState, Fragment } from "react";
import Link from "next/link";
import Head from "next/head";

import { auth } from "../lib/configs/firebaseConfig";
import { signOut } from "firebase/auth";

import Layout from "../components/Layout/Layout";
import Modal from "../components/Ui/Modal";
import Navbar from "../components/Ui/Navbar";
import SpotlightTabs from "../components/Ui/SpotlightTabs";
import Plans from "../components/Ui/Plans";
import Footer from "../components/Ui/Footer";

import classes from "../style/Welcome.module.css";

export default function Welcome({ users }) {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [activeChannelsCategory, setActiveChannelsCategory] = useState(0);

  const displayModal__FUNC = (openModal) => {
    setDisplayModal(openModal);
  };

  const changeModalState__FUNC = (e, modalContentState, openModal) => {
    e.preventDefault();

    setModalContent(modalContentState);
    displayModal__FUNC(openModal);
  };

  const changeChannelsCategory__FUNC = (e, categoryNum) => {
    e.preventDefault();

    const clickedTapLink = e.target;

    const channelsTap_LinksArr =
      clickedTapLink.parentElement.querySelectorAll("a");
    channelsTap_LinksArr.forEach((tapLinkEl) =>
      tapLinkEl.classList.remove(classes["activeTap"])
    );

    clickedTapLink.classList.add(classes["activeTap"]);

    setActiveChannelsCategory(categoryNum);
  };

  const logoutHandler = () => {
    signOut(auth);
    localStorage.setItem("uid", null);
    localStorage.setItem("token", null);
  };

  useEffect(() => {
    if (displayModal) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "scroll";
    }
  }, [displayModal]);

  useEffect(() => {
    logoutHandler();
  }, []);

  useEffect(() => {
    const mobileMediaScreen = window.matchMedia("(max-width:450px)").matches;

    const extraGap = mobileMediaScreen ? 15 : 30;

    // White Underline Element
    const category_underline__EL = document.querySelector(
      `.${classes["channel_activeTap--EL"]} span`
    );

    // Channels Tap Link elements
    const liveSport_TapLink__EL = document.querySelector(
      `.${classes["channel_Tap_Link--EL"]}:nth-child(1)`
    );
    const breakingNews_TapLink__EL = document.querySelector(
      `.${classes["channel_Tap_Link--EL"]}:nth-child(2)`
    );
    const biggestEvents_TapLink__EL = document.querySelector(
      `.${classes["channel_Tap_Link--EL"]}:nth-child(3)`
    );
    //////////////////////////////////////

    // Channels Link Details
    const liveSport_TapLink__Details =
      liveSport_TapLink__EL.getBoundingClientRect();
    const breakingNews_TapLink__Details =
      breakingNews_TapLink__EL.getBoundingClientRect();
    const biggestEvents_TapLink__Details =
      biggestEvents_TapLink__EL.getBoundingClientRect();
    //////////////////////////////////////

    if (activeChannelsCategory === 0) {
      category_underline__EL.style.width = `${liveSport_TapLink__Details.width}px`;
      category_underline__EL.style.transform = `translateX(0)`;
    }
    if (activeChannelsCategory === 1) {
      category_underline__EL.style.width = `${breakingNews_TapLink__Details.width}px`;
      category_underline__EL.style.transform = `translateX(${
        extraGap + liveSport_TapLink__Details.width
      }px)`;
    }
    if (activeChannelsCategory === 2) {
      category_underline__EL.style.width = `${biggestEvents_TapLink__Details.width}px`;
      category_underline__EL.style.transform = `translateX(${
        extraGap * 2 +
        liveSport_TapLink__Details.width +
        breakingNews_TapLink__Details.width
      }px)`;
    }
  }, [activeChannelsCategory]);

  return (
    <Fragment>
      <Head>
        <title>Stream TV and movies Live and Online | Hulu</title>
      </Head>
      <main className={`${classes["main_welcomePage--EL"]}`}>
        {!!modalContent && displayModal && (
          <Modal
            modalContent={modalContent}
            closeModalHandler={changeModalState__FUNC}
            usersAccounts={users}
          />
        )}
        <header className={classes["welcome_header--EL"]}>
          <div className={classes["welcome_header_content--WRAPPER"]}>
            <Navbar changeModalStateHandler={changeModalState__FUNC} />
            <div className={classes["header_content--CONTAINER"]}>
              <div className={classes["header_content--EL"]}>
                <span className="section_eyebrow--EL">
                  BUNDLE WITH ANY HULU PLAN & SAVE
                </span>

                <span className={classes["header-headline"]}>
                  <img
                    src="/assets/welcomePage-assets/logos/dplus-logo[full].png"
                    role="presentation"
                    alt="The Disney Bundle"
                  />
                </span>

                <p className={classes["header-text"]}>
                  Get endless entertainment, live sports, and the shows and
                  movies you love.
                </p>

                <div className={classes["header_ctas--WRAPPER"]}>
                  <button type="button">get the disney bundle</button>
                  <span className={classes["SUBFEATURESandTERMS--CONTAINER"]}>
                    <a
                      href="#"
                      onClick={(e) =>
                        changeModalState__FUNC(
                          e,
                          "subscriptionFeaturesIncluded",
                          true
                        )
                      }
                    >
                      What's includes
                    </a>{" "}
                    See <Link href="/terms">Bundle terms</Link>.
                  </span>
                  <Link href="/signup/plans">Sign up for Hulu only</Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="plansFeatures--SECTION"
          className={classes["plansFeatures--SECTION"]}
        >
          <Layout>
            <div className={classes["plansFeaturesSection_content--CONTAINER"]}>
              <div className={classes["plansFeaturesSection_typos--WRAPPER"]}>
                <span className="section_eyebrow--EL">
                  INCLUDED IN ALL PLANS
                </span>
                <h2 className="section_title--EL">All The TV You Love</h2>
                <p className="section_paragraph--EL">
                  Stream full seasons of exclusive series, current-season
                  episodes, hit movies, Hulu Originals, kids shows, and more.
                </p>
              </div>

              <div
                className={classes["plansFeaturesSection_features--CONTAINER"]}
              >
                <button
                  style={{
                    background:
                      'rgba(0, 0, 0, 0.3) url("/assets/welcomePage-assets/covers/cover-1.jpg")',
                    backgroundSize: "cover",
                  }}
                  className={`${classes["plansFeatureCard--EL"]} ${classes["tvShows_FeatureCard"]}`}
                >
                  <div className={classes["plansFeatureCard_typos--CONTAINER"]}>
                    <span>past & current seasons</span>
                    <h4>tv shows</h4>
                  </div>
                </button>
                <button
                  style={{
                    background:
                      'rgba(0, 0, 0, 0.3) url("/assets/welcomePage-assets/covers/cover-2.jpg")',
                    backgroundSize: "cover",
                  }}
                  className={`${classes["plansFeatureCard--EL"]} ${classes["movies_FeatureCard"]}`}
                >
                  <div className={classes["plansFeatureCard_typos--CONTAINER"]}>
                    <span>new & classic</span>
                    <h4>movies</h4>
                  </div>
                </button>
                <button
                  style={{
                    background:
                      'rgba(0, 0, 0, 0.3) url("/assets/welcomePage-assets/covers/cover-3.jpg")',
                    backgroundSize: "cover",
                  }}
                  className={`${classes["plansFeatureCard--EL"]} ${classes["huluOriginals_FeatureCard"]}`}
                >
                  <div className={classes["plansFeatureCard_typos--CONTAINER"]}>
                    <span>Groundbreaking</span>
                    <h4>hulu originals</h4>
                  </div>
                </button>
                <button
                  style={{
                    background:
                      'rgba(0, 0, 0, 0.3) url("/assets/welcomePage-assets/covers/cover-4.jpg")',
                    backgroundSize: "cover",
                  }}
                  className={`${classes["plansFeatureCard--EL"]} ${classes["premiums_FeatureCard"]}`}
                >
                  <div className={classes["plansFeatureCard_typos--CONTAINER"]}>
                    <span>Add-on</span>
                    <h4>premiums</h4>
                  </div>
                </button>
              </div>
            </div>
          </Layout>
        </section>

        <section
          id="billboard--SECTION"
          className={classes["billboard--SECTION"]}
        >
          <Layout biggerspacing={true}>
            <div className={classes["billboard_content--CONTAINER"]}>
              <div className={classes["billboard_content_header--WRAPPER"]}>
                <span className="section_eyebrow--EL">
                  HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+
                </span>
                <h2 className="section_title--EL">Live TV Makes It Better</h2>
                <p className="section_paragraph--EL">
                  Make the switch from cable. Get 75+ top channels on Hulu with
                  your favorite live sports, news, and events - plus the entire
                  Hulu streaming library. Access endless entertainment with
                  Disney+ and live sports with ESPN+. All three for a new price
                  of $69.99/month.
                </p>
              </div>

              <div className={classes["billboard_content_footer--WRAPPER"]}>
                <span className={classes["Billboard_disclaimer--EL"]}>
                  18+ only. Regional restrictions, blackouts and{" "}
                  <a
                    href="#"
                    onClick={(e) =>
                      changeModalState__FUNC(e, "livetvDislaimer", true)
                    }
                  >
                    Live TV terms apply
                  </a>
                  . Access content from each service separately and access ESPN+
                  content via Hulu. Location data required to watch certain
                  content. Offer valid for eligible subscribers only.{" "}
                </span>
                <a
                  href="/"
                  onClick={(e) =>
                    changeModalState__FUNC(e, "channelsAreaSearcher", true)
                  }
                  className={classes["Billboard_modalLink--EL"]}
                >
                  view channels in your area &#8594;
                </a>
                <a
                  href="#channels--SECTION"
                  className={classes["downScrollBtn--EL"]}
                >
                  <img
                    src="/assets/welcomePage-assets/icons/down-arrow.svg"
                    alt="down arrow"
                  />
                </a>
              </div>
            </div>
          </Layout>
        </section>

        <section
          id="channels--SECTION"
          className={`${classes["channels--SECTION"]} ${
            !activeChannelsCategory
              ? classes["liveSports_channel"]
              : activeChannelsCategory === 1
              ? classes["breakingNews_channel"]
              : classes["biggestEvents_channel"]
          }`}
        >
          <Layout biggerspacing={true}>
            <div className={classes["channelsSection_content--CONTAINER"]}>
              <div className={classes["channelsTapLinks_Block--CONTAINER"]}>
                <div className={classes["channelsTapLinks--CONTAINER"]}>
                  <a
                    href="#"
                    className={`${classes["channel_Tap_Link--EL"]} ${classes["activeTap"]}`}
                    onClick={(e) => changeChannelsCategory__FUNC(e, 0)}
                  >
                    live sports
                  </a>
                  <a
                    href="#"
                    className={`${classes["channel_Tap_Link--EL"]}`}
                    onClick={(e) => changeChannelsCategory__FUNC(e, 1)}
                  >
                    breaking news
                  </a>
                  <a
                    href="#"
                    className={`${classes["channel_Tap_Link--EL"]}`}
                    onClick={(e) => changeChannelsCategory__FUNC(e, 2)}
                  >
                    biggest events
                  </a>
                </div>
                <div className={classes["channel_activeTap--EL"]}>
                  <span className={classes["channel_activeTap_bar--EL"]}></span>
                </div>
              </div>

              <SpotlightTabs
                spotlight={activeChannelsCategory}
                changeModalStateHandler={changeModalState__FUNC}
              />
            </div>
          </Layout>
        </section>

        <Plans />

        <Footer />
      </main>
    </Fragment>
  );
}
