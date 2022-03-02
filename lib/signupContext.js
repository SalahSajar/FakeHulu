import {createContext ,useState} from "react";

export const SignupContext = createContext({
    planSelected: "",
});

const SignupContextProvider = ({children}) => {
    const [planSelected, setPlanSelected] = useState(null);

    const selectSignupPlanHandler = (signupPlan) => {
        setPlanSelected(signupPlan);
    }

    return <SignupContext.Provider value={{
        planSelected,
        selectSignupPlanHandler
    }}>
        {children}
    </SignupContext.Provider>
}

export default SignupContextProvider;