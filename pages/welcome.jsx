import Link from "next/link";
import Head from "next/head";
import { useEffect, useState, Fragment, useContext } from "react";

import { UserAuthContext } from "../lib/userAuthContext";

import Layout from "../components/Layout/Layout";
import Modal from "../components/Ui/Modal";
import Navbar from "../components/Ui/Navbar";
import SpotlightTabs from "../components/Ui/SpotlightTabs";
import Footer from "../components/Ui/Footer";

import classes from "../style/Welcome.module.css";

const Pricing_Checkmark_black_Path =
  "/assets/welcomePage-assets/icons/Pricing_Checkmark_black.svg";

export default function Welcome({ users }) {
  const { logoutHandler } = useContext(UserAuthContext);

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
                  <Link href="/signup">Sign up for Hulu only</Link>
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
                  <span
                    style={{
                      width: `${
                        !activeChannelsCategory
                          ? "86px"
                          : activeChannelsCategory === 1
                          ? "110px"
                          : "112px"
                      }`,
                      transform: `translateX(${
                        !activeChannelsCategory
                          ? "0px"
                          : activeChannelsCategory === 1
                          ? "116px"
                          : "256px"
                      })`,
                    }}
                    className={classes["channel_activeTap_bar--EL"]}
                  ></span>
                </div>
              </div>

              <SpotlightTabs
                spotlight={activeChannelsCategory}
                changeModalStateHandler={changeModalState__FUNC}
              />
            </div>
          </Layout>
        </section>

        <section
          id="hulupPlans--SECTION"
          className={classes["hulupPlans--SECTION"]}
        >
          <Layout>
            <div className={classes["huluPlans_content--CONTAINER"]}>
              <div className={classes["huluPlans_header--CONTAINER"]}>
                <h2 className="section_title--EL">Select Your Plan</h2>
                <p className={classes["huluPlans_description--EL"]}>
                  No hidden fees, equipment rentals, or installation
                  appointments.<b>Switch plans or cancel anytime.^^</b>
                </p>
              </div>

              <div className={classes["huluPlans_table--WRAPPER"]}>
                <table>
                  <thead>
                    <tr>
                      <th className={classes["huluPlan_rowStarter--EL"]}>
                        <div
                          className={classes["huluPlans_rowHeader--CONTAINER"]}
                        >
                          <div
                            className={
                              classes["huluPlans_rowHeader_img--CONTAINER"]
                            }
                          >
                            <img
                              src="/assets/welcomePage-assets/logos/bundles.svg"
                              alt="hulu disney+ espn+"
                            />
                          </div>
                          <div
                            className={
                              classes["huluPlans_rowHeader_typos--CONTAINER"]
                            }
                          >
                            <h3>
                              Bundle & Save{" "}
                              <a href="#">
                                <img
                                  src="/assets/welcomePage-assets/icons/info.png"
                                  alt="info icon"
                                />
                              </a>
                            </h3>
                            <p>
                              Includes Hulu (plan of your choice), Disney+, and
                              ESPN+.
                            </p>
                          </div>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className={classes["huluPlan_tableColumn_header--EL"]}
                      >
                        <div className={classes["planHeader_layoutFixer--EL"]}>
                          <div className={classes["plan_header--EL"]}>
                            <span className={classes["planPopularity--EL"]}>
                              Most Popular
                            </span>
                            <h5 className={classes["plan_header_eyebrow--EL"]}>
                              30 DAY FREE TRIAL
                            </h5>
                            <h4 className={classes["plan_header_title--EL"]}>
                              Hulu
                            </h4>
                            <button
                              type="button"
                              className={classes["plan_cta_btn--EL"]}
                            >
                              select
                            </button>
                          </div>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className={classes["huluPlan_tableColumn_header--EL"]}
                      >
                        <div className={classes["planHeader_layoutFixer--EL"]}>
                          <div className={classes["plan_header--EL"]}>
                            <h5 className={classes["plan_header_eyebrow--EL"]}>
                              30 DAY FREE TRIAL
                            </h5>
                            <h4 className={classes["plan_header_title--EL"]}>
                              Hulu (No ads)
                            </h4>
                            <button
                              type="button"
                              className={classes["plan_cta_btn--EL"]}
                            >
                              select
                            </button>
                          </div>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className={classes["huluPlan_tableColumn_header--EL"]}
                      >
                        <div className={classes["planHeader_layoutFixer--EL"]}>
                          <div className={classes["plan_header--EL"]}>
                            <h5 className={classes["plan_header_eyebrow--EL"]}>
                              DISNEY+, ESPN+
                            </h5>
                            <h4 className={classes["plan_header_title--EL"]}>
                              Hulu + Live TV
                            </h4>
                            <button
                              type="button"
                              className={classes["plan_cta_btn--EL"]}
                            >
                              select
                            </button>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th scope="row">Monthly price</th>
                      <td>$6.99/mo</td>
                      <td>$12.99/mo</td>
                      <td>$69.99/mo</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Streaming Library with thousands of TV episodes and
                        moviesStreaming Library with thousands of TV episodes
                        and movies.
                      </th>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Most new episodes the day after they air^
                      </th>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Access to award-winning Hulu Originals
                      </th>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Watch on your TV, laptop, phone, or tablet
                      </th>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Up to 6 user profiles</th>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Watch on 2 different screens at the same time
                      </th>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">No ads in streaming library</th>
                      <td>----</td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>----</td>
                    </tr>
                    <tr>
                      <th scope="row">Download and watch</th>
                      <td>----</td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                      <td>----</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Live TV with 75+ top channels. No cable required.
                      </th>
                      <td>----</td>
                      <td>----</td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Live TV guide to navigate channels</th>
                      <td>----</td>
                      <td>----</td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Record Live TV with 50 hours of Cloud DVR storage
                      </th>
                      <td>----</td>
                      <td>----</td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Endless entertainment with Disney+, ad-free
                      </th>
                      <td>----</td>
                      <td>----</td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Live sports with ESPN+, now on Hulu</th>
                      <td>----</td>
                      <td>----</td>
                      <td>
                        <img
                          src={Pricing_Checkmark_black_Path}
                          alt="this feature aquired in this Plan"
                        />
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>
                        <div
                          className={
                            classes["table_disclaimer_content--WRAPPER"]
                          }
                        >
                          <span>
                            ^For current-season shows in the streaming library
                            only
                          </span>
                          <span>
                            ^^Switches from Live TV to Hulu take effect as of
                            the next billing cycle
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </Layout>

          <Footer />
        </section>
      </main>
    </Fragment>
  );
}

export async function getStaticProps(stuff) {
  const req = await fetch(
    "https://fakehulu-default-rtdb.europe-west1.firebasedatabase.app/FakeHuluUsers.json"
  );
  const data = await req.json();
  let users = [];

  for (const id in data) {
    users.push(data[id]);
  }

  return {
    props: {
      users,
    },
  };
}
