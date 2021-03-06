import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const NavTab = ({setstate, state}) => {
    const classes = useStyles();
    
    const handleChange = (event, newValue) => {
        setstate(newValue);
    };

    return (
        <div className='navTab'>
           <Tabs className={classes.tab}
                  textColor="primary"
                  indicatorColor="primary"
                  variant="fullWidth"
                  onChange={handleChange}
                  value={state}
                  >
                <Tab
                    component="a"
                    onClick={(event) => {event.preventDefault()}}
                    label="DENUNCIAS"/>
                <Tab
                    component="a"
                    onClick={(event) => {event.preventDefault()}}
                    label="MIS DENUNCIAS"/>
            </Tabs>
            
        </div>
    )
}

export default NavTab

//ESTILOS
const useStyles = makeStyles((theme) => ({
    tab: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));