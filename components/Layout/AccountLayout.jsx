import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";

import { auth } from "../../lib/configs/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import { useUserAuth } from "../../lib/customHooks/useUserAuth";

import Navbar from "../Ui/Navbar";

import classes from "../../style/accountLayout.module.css";

const AccountLayout = ({ children, accountPage, showNavbar }) => {
  const { accountID } = useRouter().query;

  const { userIsAuthenticated, checkUserAuthHandler } = useUserAuth();

  useEffect(() => {
    if (!!accountID) {
      onAuthStateChanged(auth, (user) => {
        if (!!user) {
          const localUserUid = localStorage.getItem("uid");
          const localUserToken = localStorage.getItem("token");

          if (localUserUid === "null") localStorage.setItem("uid", user.uid);
          if (localUserToken === "null")
            localStorage.setItem("token", user.accessToken);

          checkUserAuthHandler(accountID, user.uid);
        } else {
          window.location.replace("/welcome");
        }
      });
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
