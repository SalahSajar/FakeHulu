import React, { useEffect } from 'react';

import {useRouter} from 'next/router';

const SignUp = () => {
    const router = useRouter();


    useEffect(() => {
        router.push("/signup/plans");
    }, []);
  return "";
};

export default SignUp;
