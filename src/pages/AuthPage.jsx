import React from 'react';
import LayoutAuth from './LayoutAuth';
import Auth from '../services/Auth';

const AuthPage = ({type}) => {
    return (
        <LayoutAuth>
            <Auth type={type}/>
        </LayoutAuth>
    )
}

export default AuthPage
