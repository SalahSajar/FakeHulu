import { Fragment, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import classes from "../../style/Plans.module.css";

import Navbar from "../../components/Ui/Navbar";
import SignupLayout from "../../components/Layout/SignupLayout";

import InfoModal from "../../components/Ui/InfoModal";

import { SignupContext } from "../../lib/signupContext";

const Plans = () => {
  const router = useRouter();
  const [plansState, setPlansState] = useState("basePlans");

  const { selectSignupPlanHandler } = useContext(SignupContext);

  const changePlansState__FUNC = (e) => {
    e.preventDefault();

    const clickedPlansBtn = e.target;
    const planTargeted = clickedPlansBtn.dataset.plans;

    setPlansState(planTargeted);
  };

  const selectPlan__FUNC = (e) => {
    const selectedPlanId = e.target.dataset.plan;

    selectSignupPlanHandler(selectedPlanId);

    router.push("/signup/account");
  };

  useEffect(() => {
    document.querySelector("body").style.overflowY = "scroll";
  }, []);

  return (
    <Fragment>
      <main className={classes["signupPlans_main--EL"]}>
        <Navbar page="signup" />

        <SignupLayout>
          <div className={classes["signupPlans_content--CONTAINER"]}>
            <div className="signUp_header--EL">
              <h2>Choose Your Plan</h2>
              <p>Switch plans or cancel anytime.</p>
            </div>
          </div>

          <div className={classes["plansDetailsBlock--EL"]}>
            <div className={classes["plansBlock_header--EL"]}>
              <div className={classes["plansCategories--CONTAINER"]}>
                <a
                  href="#"
                  onClick={changePlansState__FUNC}
                  data-plans="basePlans"
                  data-activeplans={plansState === "basePlans"}
                >
                  base plans
                </a>
                <a
                  href="#"
                  onClick={changePlansState__FUNC}
                  data-plans="bundle/save"
                  data-activeplans={plansState === "bundle/save"}
                >
                  bundle /save
                </a>
              </div>
            </div>
            {plansState === "basePlans" ? (
              <div className={classes["planGroup--EL"]}>
                <div className={classes["planGroup_items--CONTAINER"]}>
                  <div className={`${classes["planGroup_item--EL"]}`}>
                    <div
                      className={classes["planGroup_itemDetails--CONTAINER"]}
                    >
                      <h3 className={classes["planGroup_item_Title--EL"]}>
                        Hulu (No Ads)
                      </h3>
                      <h6
                        className={classes["planGroup_item_SpecialOffer--EL"]}
                      >
                        Get First Month Free, Then
                      </h6>
                      <h4 className={classes["planGroup_item_Price--EL"]}>
                        $12.99 <sub>/ month</sub>
                      </h4>
                      <p
                        className={
                          classes["planGroup_item_DetailsPragraph--EL"]
                        }
                      >
                        Our ad-free plan lets you watch exclusive series, hit
                        movies, Originals, kids shows, and tons more with no ad
                        interruptions.
                      </p>
                      <button
                        type="button"
                        onClick={selectPlan__FUNC}
                        data-plan="basePlans_HuluNoAds_Plan"
                        className={classes["selectPlan--BTN"]}
                      >
                        select
                      </button>
                    </div>
                  </div>
                  <div
                    className={`${classes["planGroup_item--EL"]} ${classes["mostPopularPlan"]}`}
                  >
                    <div
                      className={classes["planGroup_itemDetails--CONTAINER"]}
                    >
                      <h3 className={classes["planGroup_item_Title--EL"]}>
                        Hulu
                      </h3>
                      <h6
                        className={classes["planGroup_item_SpecialOffer--EL"]}
                      >
                        Get First Month Free, Then
                      </h6>
                      <h4 className={classes["planGroup_item_Price--EL"]}>
                        $6.99 <sub>/ month</sub>
                      </h4>
                      <p
                        className={
                          classes["planGroup_item_DetailsPragraph--EL"]
                        }
                      >
                        Our ad-supported plan lets you watch exclusive series,
                        hit movies, Originals, kids shows, and tons more.
                      </p>
                      <button
                        type="button"
                        onClick={selectPlan__FUNC}
                        data-plan="basePlans_Hulu_Plan"
                        className={classes["selectPlan--BTN"]}
                      >
                        select
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={classes["planGroup--EL"]}>
                <div className={classes["planGroup_items--CONTAINER"]}>
                  <div className={`${classes["planGroup_item--EL"]}`}>
                    <div
                      className={classes["planGroup_itemDetails--CONTAINER"]}
                    >
                      <h3 className={classes["planGroup_item_Title--EL"]}>
                        Hulu (No Ads)
                      </h3>
                      <span
                        className={classes["planGroup_item_Logo--CONTAINER"]}
                      >
                        {" "}
                        <img
                          src="/assets/signupPage-assets/logos/superbundle-logo-color.svg"
                          alt=""
                        />{" "}
                      </span>
                      <h4 className={classes["planGroup_item_Price--EL"]}>
                        $19.99 <sub>/ month</sub>
                      </h4>
                      <p
                        className={
                          classes["planGroup_item_DetailsPragraph--EL"]
                        }
                      >
                        Access live sports with ESPN+, endless, ad-free
                        entertainment with Disney+, and award-winning Hulu
                        Originals with Hulu (No Ads).
                      </p>
                      <button
                        type="button"
                        onClick={selectPlan__FUNC}
                        data-plan="bundleSave_HuluNoAds_Plan"
                        className={classes["selectPlan--BTN"]}
                      >
                        select
                      </button>

                      <a href="#" className={classes["learnMore--BTN"]}>
                        {" "}
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className={`${classes["planGroup_item--EL"]}`}>
                    <div
                      className={classes["planGroup_itemDetails--CONTAINER"]}
                    >
                      <h3 className={classes["planGroup_item_Title--EL"]}>
                        Hulu
                      </h3>
                      <span
                        className={classes["planGroup_item_Logo--CONTAINER"]}
                      >
                        {" "}
                        <img
                          src="/assets/signupPage-assets/logos/superbundle-logo-color.svg"
                          alt=""
                        />{" "}
                      </span>
                      <h4 className={classes["planGroup_item_Price--EL"]}>
                        $13.99 <sub>/ month</sub>
                      </h4>
                      <p
                        className={
                          classes["planGroup_item_DetailsPragraph--EL"]
                        }
                      >
                        Access live sports with ESPN+, endless, ad-free
                        entertainment with Disney+, and award-winning Hulu
                        Originals with Hulu (ad-supported). *In monthly savings.
                      </p>
                      <button
                        type="button"
                        onClick={selectPlan__FUNC}
                        data-plan="bundleSave_Hulu_Plan"
                        className={classes["selectPlan--BTN"]}
                      >
                        select
                      </button>

                      <a href="#" className={classes["learnMore--BTN"]}>
                        {" "}
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <InfoModal infos="Due to streaming rights, a few shows are not included in the Hulu (No Ads) plan and will instead play interruption-free with a short ad break before and after each episode. Visit the Hulu Help Center for a list of shows.">
              {" "}
              <span className={classes["plansDisclaimer--EL"]}>
                {" "}
                A few excluded shows play with ads.{" "}
              </span>{" "}
            </InfoModal>
          </div>

          <a href="#" className={classes["studentDiscount--BTN"]}>
            Looking for our student discount?
          </a>
        </SignupLayout>
      </main>
    </Fragment>
  );
};

export default Plans;
