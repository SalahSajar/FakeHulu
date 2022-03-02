import {useEffect} from "react";

import LoadingModal from "../components/Ui/AccountModals/LoadingModal";

export default function Home() {

  useEffect(() => {
    const userAccountId = localStorage.getItem("loggedInAccountID");
    const userIsLoggedIn = localStorage.getItem("loggedIn");

    if(userAccountId !== "null" && userIsLoggedIn === "true"){
      window.location.replace(`/account/${userAccountId}`)
    } else {
      window.location.replace(`/welcome`);
    }

  }, []);
  return (
    <div style={{height: "100vh"}}>
      <LoadingModal />
    </div>
  );
}
