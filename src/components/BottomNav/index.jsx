import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { useLocation } from 'wouter';


const BottomNav = () => {
    const [value, setValue] = useState(0);
    const [disable, setdisable] = useState(false)
    const classes = useStyles();
    const [path, pushLocation] = useLocation();

    useEffect(()=> {
      if(path === '/NewDenuncia/'){
        setValue(1)
        setdisable(true)
      } else {
        setValue(0)
        setdisable(false)
      }
    },[value,path]);

    return ( 
          <BottomNavigation
            className={classes.bottomNav}
            value={value}
            showLabels
            >
            <BottomNavigationAction 
              label="Nueva Denuncia" 
              icon={<AddCircle />} 
              onClick={()=>pushLocation('/NewDenuncia/')} 
              disabled={disable}/>
        </BottomNavigation>         
     );
}
 
export default BottomNav;


//ESTILOS
const useStyles = makeStyles({
  bottomNav: {
    width: '100%'
  }
});