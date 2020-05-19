import React from 'react';
import LayoutAuth from './LayoutAuth';
import SignInDataUpload from '../services/Auth/SignInDataUpload'


const AuthConfirm = () => {
    return (
        <LayoutAuth>
            <SignInDataUpload/>
        </LayoutAuth>
    )
}

export default AuthConfirm
