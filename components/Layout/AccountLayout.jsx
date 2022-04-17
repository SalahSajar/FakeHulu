import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";

import { useUserAuth } from "../../lib/customHooks/useUserAuth";

import Navbar from "../Ui/Navbar";

import classes from "../../style/accountLayout.module.css";

const AccountLayout = ({ children, accountPage, showNavbar }) => {
  const { accountID } = useRouter().query;

  const { userIsAuthenticated, checkUserAuthHandler } = useUserAuth();

  useEffect(() => {
    const sessionUserUid = sessionStorage.getItem("uid");
    const sessionUserToken = sessionStorage.getItem("token");

    if (sessionUserUid === "null" || sessionUserToken === "null") {
      window.location.replace("/welcome");
      return;
    }

    if (!!accountID) {
      checkUserAuthHandler(accountID);
      return;
    }
  }, [accountID]);

  return (
    <Fragment>
      <div className={`accountPage--BASE`}>
        {userIsAuthenticated && (
          <main className={classes["account_homePage--EL"]}>
            {showNavbar && <Navbar page="accountNavbar" params={accountPage} />}
            {children}
          </main>
        )}
      </div>
    </Fragment>
  );
};

export default AccountLayout;
