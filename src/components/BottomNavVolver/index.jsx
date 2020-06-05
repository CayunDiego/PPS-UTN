import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';

import {useLocation} from 'wouter';

const BottomNavVolver = () => {
    const classes = useStyles();
    const [, pushLocation] = useLocation();

    return ( 
          <BottomNavigation
            className={classes.bottomNav}
            value={0}
            showLabels
            >
            <BottomNavigationAction 
              label="Página Principal" 
              icon={<HomeIcon />} 
              onClick={()=>pushLocation('/')} 
           />
        </BottomNavigation>         
     );
}
 
export default BottomNavVolver;

//ESTILOS
const useStyles = makeStyles({
  bottomNav: {
    width: '100%'
  }
});