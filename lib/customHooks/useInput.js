import {useState} from "react";

export const useInput = () => {
    const [emailIsvalid,setEmailIsvalid] = useState(true);
    const [passwordIsvalid,setPasswordIsvalid] = useState(true);
    const [nameIsvalid, setNameIsvalid] = useState(true);
    const [birthdayIsvalid, setBirthdayIsvalid] = useState(true);

    const [emailIsChanged,setEmailIsChanged] = useState(false);
    const [passwordIsChanged,setPasswordIsChanged] = useState(false);
    const [nameIsChanged, setNameIsChanged] = useState(false);
    const [birthdayIsChanged, setBirthdayIsChanged] = useState(false);

    const emailInputHandlerObj = {
        resetEmailInputHandler: () => setEmailIsvalid(true),
        checkEmailValueHandler:(event) => {
            const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
            const emailValue = event.target.value;

            setEmailIsvalid(re.test(emailValue));
            setEmailIsChanged(true);
        }
    }

    const nameInputHandlerObj = {
        resetNameInputHandler : () => setNameIsvalid(true),
        checkNameValueHandler : (event) => {
            const nameValue = event.target.value.trim();

            setNameIsvalid(nameValue.length >= 5);
            setNameIsChanged(true);
        }
    }

    const passwordInputHandlerObj = {
        resetPasswordInputHandler: () => setPasswordIsvalid(true),
        checkPasswordValueHandler: (event) => {
            const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
            const passwordValue = event.target.value;

            setPasswordIsvalid(re.test(passwordValue));
            setPasswordIsChanged(true);
        }
    }


    const birthdayInputHandlerObj = {
        resetBirthdayInputHandler: () => setPasswordIsvalid(true),
        checkBirthdayValueHandler: (event) => {
            const birthdayInputValue = event.target.value;
            
            const time = new Date().getTime() - new Date(birthdayInputValue).getTime();
            const userAgeCalculation = time/31536000000;

            setBirthdayIsvalid(time > 0 && userAgeCalculation >=18 );
            setBirthdayIsChanged(true);
        }
    }

    return {
        emailIsvalid,
        passwordIsvalid,
        nameIsvalid,
        birthdayIsvalid,
        emailIsChanged,
        passwordIsChanged,
        nameIsChanged,
        birthdayIsChanged,
        emailInputHandlerObj,
        nameInputHandlerObj,
        passwordInputHandlerObj,
        birthdayInputHandlerObj,
    }
}

