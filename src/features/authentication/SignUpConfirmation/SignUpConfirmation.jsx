import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { Input } from '../../shared/Input';

async function signUpConfirmation({ username, code }) {
    try {
        const result = await Auth.confirmSignUp(username, code);
        console.log(result)
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}


export const SingUpConfirmation = (props) => {
    const [username, setUsername] = useState('')
    const [code, setCode] = useState('')


    return (
        <>
            <div style={{marginTop: '10px'}}>
                <b>CONFIRMATION</b>
                <Input name={'Username'} value={username} setValue={setUsername} />
                <Input name={'Code'} value={code} setValue={setCode} />
                <button onClick={() => signUpConfirmation({ username, code })}>Confirm</button>
            </div>
        </>

    )
}