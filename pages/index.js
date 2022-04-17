import {useEffect} from "react";

import {auth} from "../lib/configs/firebaseConfig";

import LoadingModal from "../components/Ui/AccountModals/LoadingModal";

export default function Home() {

  useEffect(() => {
    const userToken = sessionStorage.getItem("token");
    const userUid = sessionStorage.getItem("uid");
    const currentUserUid = auth.currentUser?.uid;
    const currentUserToken = auth.currentUser?.accessToken;

    if(!!auth.currentUser){
      console.log("------------LOGGED IN");
      sessionStorage.setItem("uid", currentUserUid);
      sessionStorage.setItem("token", currentUserToken);

      window.location.replace(`/account/${currentUserUid}`);
    } else {
      console.log("------------NOT LOGGED IN");
      window.location.replace(`/welcome`);
    }

  }, []);
  return (
    <div style={{height: "100vh"}}>
      <LoadingModal />
    </div>
  );
}
