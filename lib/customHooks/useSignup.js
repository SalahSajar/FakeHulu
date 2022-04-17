import {useState} from "react";

import {auth, db} from "../configs/firebaseConfig";

import {doc, setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword} from "firebase/auth";

import md5 from "md5";

export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorType, setErrorType] = useState(null);

    const signupHandler = async (signupDetails) => {
        try{
            setIsLoading(true);
            setSuccess(false);
            setError(false);
            setErrorType(null);

            const userSignupRes = await createUserWithEmailAndPassword(auth, signupDetails.email , signupDetails.password);
            const fakeHulu_doc_ref = doc(db, "users", userSignupRes.user.uid);

            await setDoc(fakeHulu_doc_ref, {...signupDetails , password: md5(signupDetails.password)});

            setIsLoading(false);
            setSuccess(true);
            setError(false);
            setErrorType(null);
        } catch(err){
            if(err.message.includes("auth/email-already-in-use")){
                setErrorType("emailAlreadyInUse");
            } else {
                console.log("something else Went Wrong!!", err);
            }

            setIsLoading(false);
            setSuccess(false);
            setError(true);
        }
    }

    return {
        signupHandler,
        success,
        error,
        errorType,
        isLoading
    }
} 
