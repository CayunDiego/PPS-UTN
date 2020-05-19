import React from 'react';
import { makeStyles } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import UserPhoto from '../UserPhoto';
import Logout from '../../services/Auth/Logout'

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className='navbar'>
             <IconButton 
                href="/"
                aria-label="menu" 
                color="inherit" 
                className={classes.menuButton}>
                <HomeIcon/>
              </IconButton>
            <h3>Monitoreo Ciudadano</h3>
            <Logout/>
            <IconButton 
                  href="/profile/"
                  aria-label="menu" 
                  color="inherit" 
                  className={classes.menuButton}>
                  <UserPhoto tamanio="small"/>
            </IconButton>
        </div>
    )
}

export default Navbar


//ESTILOS
const useStyles = makeStyles( theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2)
    },
  }))