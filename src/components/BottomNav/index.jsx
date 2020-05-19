import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const BottomNav = () => {
    const [value, setValue] = useState(0);
    const classes = useStyles();

    return ( 
          <BottomNavigation
          
          className={classes.bottomNav}
          value={value}
          showLabels
          onChange={(event, newValue) => {
            setValue(1);
          }}
          >
          <BottomNavigationAction label="Nueva Denuncia" icon={<AddCircleIcon />} href='/NewDenuncia/'/>
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