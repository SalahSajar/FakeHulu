import {Fragment} from 'react';

import classes from "../../../style/subscriptionFeaturesIncludedModal.module.css";

const SubscriptionFeaturesIncludedModal = () => {
  return (
    <Fragment>
      <div className={classes["subscriptionFeaturesIncludedModal_content--WRAPPER"]}>
        <h4 className={classes["modal_content_title--EL"]}>What's Included in The Disney Bundle?</h4>

        <ul className={classes["subscriptionFeatures_list--EL"]}>
          <li><span><img src="/assets/welcomePage-assets/icons/Pricing_Checkmark_black.svg" alt="check icon" /></span>Subscriptions to Disney+, ESPN+, and Hulu for a discounted price. Available with Hulu (ad-supported) for $13.99/month or with Hulu (No Ads) for $19.99/month.</li>
          <li><span><img src="/assets/welcomePage-assets/icons/Pricing_Checkmark_black.svg" alt="check icon" /></span>Savings of $7.98/month compared to the regular price of each service.</li>
          <li><span><img src="/assets/welcomePage-assets/icons/Pricing_Checkmark_black.svg" alt="check icon" /></span>Enjoy all your favorite shows, movies, sports, and more using the Disney+, Hulu, and ESPN apps (or sites, for those on a browser). Download each app separately to access each service.</li>
          <li><span><img src="/assets/welcomePage-assets/icons/Pricing_Checkmark_black.svg" alt="check icon" /></span>Access select ESPN+ content via Hulu.</li>
          <li><span><img src="/assets/welcomePage-assets/icons/Pricing_Checkmark_black.svg" alt="check icon" /></span>Cancel anytime</li>
          <li>No free trial available. Savings compared to regular price for each service. 18+ only.</li>
        </ul>
      </div>
    </Fragment>
  )
};

export default SubscriptionFeaturesIncludedModal;
