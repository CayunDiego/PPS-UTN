import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { useLocation } from 'wouter';
import UserPhoto from '../UserPhoto';


const Navbar = ({click}) => {
    const [, pushLocation] = useLocation();

    return (
        <nav className='navbar'>
             <div className='container'>
                <IconButton 
                    onClick={()=> pushLocation('/')}
                    aria-label="menu" 
                    color="inherit">
                    <HomeIcon/>
                </IconButton>
                <h3>Monitoreo Ciudadano</h3>
                <IconButton 
                    onClick={click}
                    aria-label="menu" 
                    color="inherit">
                    <UserPhoto tamanio="small"/>
                </IconButton>
            </div>
        </nav>
    )
}

export default Navbar;