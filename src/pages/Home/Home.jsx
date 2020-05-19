import React from 'react';
import ButtonCustom from '../../components/Button'

const IndexWithoutLogin = () => {
    return ( 
        <div>
            <h1>SOY EL HOME U. NO LOGUEADO</h1>
            <ButtonCustom name="Denuncia Rápida" path="/denuncia"/>
            <ButtonCustom name="Login" path="/login/"/>  
        </div>
     );
}
 
export default IndexWithoutLogin;