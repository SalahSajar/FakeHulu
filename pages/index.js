import {useEffect} from "react";
import {useRouter} from "next/router";

import {auth} from "../lib/configs/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import LoadingModal from "@Ui-Comps/AccountModals/LoadingModal";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth , user => {
      if(!!user){
        const localUserUid = localStorage.getItem("uid");
        const localUserToken = localStorage.getItem("token");

        if (localUserUid === "null") localStorage.setItem("uid", user.uid);
        if (localUserToken === "null") localStorage.setItem("token", user.accessToken);

        router.replace(`/account/${user.uid}`);
      } else {
        router.replace(`/welcome`);
      }
    });
  }, []);

  return (
    <div style={{height: "100vh"}}>
      <LoadingModal />
    </div>
  )
}
