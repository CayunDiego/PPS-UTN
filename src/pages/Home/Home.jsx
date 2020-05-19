import React from 'react';
import ButtonCustom from '../../components/Button';
import LayoutAuth from '../LayoutAuth';

const IndexWithoutLogin = () => {
    return ( 
        <LayoutAuth>
            <img src='/assets/logo-muni-verde.png' alt="logo" className='logo'/>
            <ButtonCustom name="Denuncia Rápida" path="/denuncia"/>
            <ButtonCustom name="Login" path="/login/"/>
        </LayoutAuth>
     );
}
 
export default IndexWithoutLogin;