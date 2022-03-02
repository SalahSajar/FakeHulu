import {useState} from "react"; 

export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const signupHandler = async (signupDetails) => {
        try{
            setIsLoading(true);
            setError(false);
            setSuccess(false);
            
            const req = await fetch('https://fakehulu-default-rtdb.europe-west1.firebasedatabase.app/FakeHuluUsers.json',{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(signupDetails),
            })

            if(!req.ok){
                throw Error('Something went wrong!');

                return;
            }

            setIsLoading(false);
            setSuccess(true);

        } catch (err){
            setIsLoading(false);
            setSuccess(false)
            setError(true);
        }
    }

    return {
        signupHandler,
        success,
        error,
        isLoading
    }
} 