import React from 'react';
import './signinSignup.scss';

import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signUp/SignUp';

const SignInSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUp;
