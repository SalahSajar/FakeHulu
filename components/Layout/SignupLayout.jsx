import React, {Fragment} from 'react';

import classes from "../../style/SignupLayout.module.css";

const SignupLayout = ({children, size}) => {
  return (
    <Fragment>
      <section className={classes["signupContent--CONTAINER"]}>
        <div className={`${classes["signupContentBlock--EL"]} ${!!size && classes["sm_layoutChild"]}`}>
          {children}
        </div>
      </section>
      <footer className={classes["signup_footer--EL"]}>
        <ul className="f-center-between">
          <li><a href="#">about ads</a></li>
          <li><a href="#">terms of use</a></li>
          <li><a href="#">privacy policy</a></li>
          <li><a href="#">Do Not Sell My Personal Information</a></li>
          <li><a href="#">Your California Privacy Right</a></li>
          <li>&#169; 2022 Hulu, LLC</li>
      </ul>
      </footer>
    </Fragment>
    );
};

export default SignupLayout;
