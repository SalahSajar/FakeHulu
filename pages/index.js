import {useEffect} from "react";

import {auth} from "../lib/configs/firebaseConfig";

import LoadingModal from "../components/Ui/AccountModals/LoadingModal";

export default function Home() {

  useEffect(() => {
    const currentUserUid = auth.currentUser?.uid;
    const currentUserToken = auth.currentUser?.accessToken;

    if(!!auth.currentUser){
      sessionStorage.setItem("uid", currentUserUid);
      sessionStorage.setItem("token", currentUserToken);

      window.location.replace(`/account/${currentUserUid}`);
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
