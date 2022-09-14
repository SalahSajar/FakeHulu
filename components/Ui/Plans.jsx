import { Fragment } from "react";

import Layout from "../Layout/Layout";

import classes from "../../style/Welcome_Plans.module.css";

const Pricing_Checkmark_black_Path =
  "/assets/welcomePage-assets/icons/Pricing_Checkmark_black.svg";

const Plans = () => {
  return (
    <Fragment>
      <section
        id="hulupPlans--SECTION"
        className={classes["hulupPlans--SECTION"]}
      >
        <Layout>
          <div className={classes["huluPlans_content--CONTAINER"]}>
            <div className={classes["huluPlans_header--CONTAINER"]}>
              <h2 className="section_title--EL">Select Your Plan</h2>
              <p className={classes["huluPlans_description--EL"]}>
                No hidden fees, equipment rentals, or installation appointments.
                <b>Switch plans or cancel anytime.^^</b>
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
                          <span className={classes["plan_header_eyebrow--EL"]}>
                            30 DAY FREE TRIAL
                          </span>
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
                          <span className={classes["plan_header_eyebrow--EL"]}>
                            30 DAY FREE TRIAL
                          </span>
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
                          <span className={classes["plan_header_eyebrow--EL"]}>
                            DISNEY+, ESPN+
                          </span>
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
                      moviesStreaming Library with thousands of TV episodes and
                      movies.
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
                    <th scope="row">Access to award-winning Hulu Originals</th>
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
                        className={classes["table_disclaimer_content--WRAPPER"]}
                      >
                        <span>
                          ^For current-season shows in the streaming library
                          only
                        </span>
                        <span>
                          ^^Switches from Live TV to Hulu take effect as of the
                          next billing cycle
                        </span>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </Layout>
      </section>
    </Fragment>
  );
};

export default Plans;
