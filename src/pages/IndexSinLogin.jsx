import React from 'react';
import ButtonCustom from '../components/Button'
import { Link } from 'react-router-dom';

const indexSinLogin = () => {
    return ( 
        <div>
            <h1>SOY EL HOME U. NO LOGUEADO</h1>
            <ButtonCustom name="Denuncia Rápida" path="/denuncia"/>
            <ButtonCustom name="Login" path="/login/"/>  
            <Link to='/signin/'>Crear cuenta</Link>
        </div>
     );
}
 
export default indexSinLogin;