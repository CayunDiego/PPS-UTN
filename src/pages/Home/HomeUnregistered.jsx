import React from 'react';
import ButtonCustom from '../../components/Button';
import LayoutAuth from '../LayoutAuth';


const HomeUnregistered = () => {
    return ( 
        <LayoutAuth>
            <img src='/assets/logo-muni-verde.png' alt="logo" className='logo'/>
            <ButtonCustom name="Denuncia Rápida"  url={'/newdenuncia/'}/>
            <ButtonCustom name="Login" url={'/login/'}/>
        </LayoutAuth>
     );
}
 
export default HomeUnregistered;