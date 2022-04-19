import {useEffect} from "react";

import {auth} from "../lib/configs/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import LoadingModal from "../components/Ui/AccountModals/LoadingModal";

export default function Home() {

  useEffect(() => {
    onAuthStateChanged(auth , user => {
      if(!!user){
        const localUserUid = localStorage.getItem("uid");
        const localUserToken = localStorage.getItem("token");

        if (localUserUid === "null") localStorage.setItem("uid", user.uid);
        if (localUserToken === "null") localStorage.setItem("token", user.accessToken);

        window.location.replace(`/account/${user.uid}`);
      } else {
        window.location.replace(`/welcome`);
      }
    });
  }, []);
  return (
    <div style={{height: "100vh"}}>
      <LoadingModal />
    </div>
  );
}
