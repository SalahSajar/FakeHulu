import Link from 'next/link';
import {Fragment} from 'react';

import classes from "../../../style/livetvDislaimerModal.module.css";

const LivetvDislaimerModal = () => {
  return (
    <Fragment>

      <div className={classes["livetvDisclaimer_content--CONTAINER"]}>
        <p>18+ only. Any free trials valid for new and eligible returning subscribers only. For personal and non-commercial use only. Live TV is available in the 50 United States and the District of Columbia only. Compatible device and high-speed, broadband Internet connection required. Multiple concurrent streams and HD content may require higher bandwidth. Streaming content may count against your data usage. Location data required to access content. Live TV may vary by subscription and location. <a href="#">Click here</a>  to check channel availability in your area. Programming subject to regional availability, blackouts, and device restrictions. Number of permitted concurrent streams will vary based on the terms of your subscription. Cloud DVR storage space is limited. Pricing, channels, features, content, and compatible devices subject to change. Please review our <Link href="/terms">Terms of Use</Link> and <Link href="/privacy">Privacy Policy</Link>.</p>
        <br />
        <p>For Live TV, now with Disney+ and ESPN+: if you already have existing subscription(s) with Disney+ and/or ESPN+, you may sign up without cancelling your existing subscription(s). Amount charged will be adjusted to account for those existing subscription(s) as long as they are maintained. Existing subscription(s) with Disney+ and/or ESPN+ will not be changed or replaced by Live TV. Access content from each service separately, and select ESPN+ content via Hulu. Certain account information provided to Disney+ and/or ESPN+ for activation and administration.</p>
      </div>
    </Fragment>
  )
};

export default LivetvDislaimerModal;
