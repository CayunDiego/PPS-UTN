import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { useLocation } from 'react-router-dom'

const BottomNav = () => {
    const [value, setValue] = useState(0);
    const [disable, setdisable] = useState(false)
    const classes = useStyles();
    const active = useLocation();

    useEffect(()=> {
      if(active.pathname === '/NewDenuncia/'){
        setValue(1)
        setdisable(true)
      } else {
        setValue(0)
        setdisable(false)
      }
    },[value,active]);

    return ( 
          <BottomNavigation
            className={classes.bottomNav}
            value={value}
            showLabels
            >
            <BottomNavigationAction label="Nueva Denuncia" icon={<AddCircleIcon />} href='/NewDenuncia/' disabled={disable}/>
        </BottomNavigation>         
     );
}
 
export default BottomNav;


//ESTILOS
const useStyles = makeStyles((theme) => ({
  bottomNav: {
    width: '100%'
  }
}));