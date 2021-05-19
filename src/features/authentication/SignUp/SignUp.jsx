import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { Input } from '../../shared/Input';
import { SingUpConfirmation } from '../SignUpConfirmation/SignUpConfirmation';
import { linkCognitoUser } from '@api/functions/auth/link-cognito-user'
import { getGuides } from '@api/functions/guides/get-guides';

async function signUp({ username, password, email, name, firstName, isMarketingAllowed, setAgreementAccepted }) {
    try {
        const result = await Auth.signUp({
            username,
            password,
            attributes: {
                email,
                'custom:firstName': firstName,
                name,
                'custom:isMarketingAllowed': isMarketingAllowed,
                'custom:isAgreementAccepted': setAgreementAccepted,
            }
        });
        const linkingResult = await linkCognitoUser({
            email,
            firstName: firstName,
            password: password,
            username: username,
        });
        console.log(linkingResult)
        console.log('user linked!')
    } catch (error) {
        console.log('error signing up:', error);
    }
}


export const SingUp = (props) => {

    const [firstName, setFirstName ] = useState('')
    const [isMarketingAllowed, setMarketingAllowed ] = useState('')
    const [agreementAccepted, setAgreementAccepted ] = useState('')

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    return (
        <>
            <div>
                <h2>REGISTRACTION</h2>
                <Input name={'Email'} value={email} setValue={setEmail} />
                <Input name={'Username'} value={username} setValue={setUsername} />
                <Input name={'Password'} value={password} setValue={setPassword} />
                <h3>User Info</h3>
                <Input name={'firstName'} value={firstName} setValue={setFirstName} />
                <Input name={'isMarketingAllowed'} value={isMarketingAllowed} setValue={setMarketingAllowed} />
                <Input name={'agreementAccepted'} value={agreementAccepted} setValue={setAgreementAccepted} />
                <hr />
                <button onClick={() => signUp({ username, password, email, firstName, isMarketingAllowed, agreementAccepted })}>SignUp</button>
            </div>
            <SingUpConfirmation />
        </>

    )
}