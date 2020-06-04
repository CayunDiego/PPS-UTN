import React from 'react';
import { makeStyles } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { useLocation } from 'wouter';
import UserPhoto from '../UserPhoto';


const Navbar = ({click}) => {
    const [, pushLocation] = useLocation();
    const classes = useStyles();

    return (
        <nav className='navbar'>
             <div className='container'>
                <IconButton 
                    onClick={()=> pushLocation('/')}
                    aria-label="menu" 
                    color="inherit" 
                    className={classes.menuButton}>
                    <HomeIcon/>
                </IconButton>
                <h3>Monitoreo Ciudadano</h3>
                <IconButton 
                    onClick={click}
                    aria-label="menu" 
                    color="inherit" 
                    className={classes.menuButton}>
                    <UserPhoto tamanio="small"/>
                </IconButton>
            </div>
        </nav>
    )
}

export default Navbar


//ESTILOS
const useStyles = makeStyles( theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(0)
    },
  }))