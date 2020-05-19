import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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

const useStyles = makeStyles((theme) => ({
    tab: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

//   (event, newValue) =>  setValue(newValue)

//   const handleChange = (event, newValue) => {
//     if(newValue===1){
//         return (<Redirect to='/misdenuncias/'/>)
//     } else {
//         return (<Redirect to='/'/>)
//     }
//     setValue(newValue);
//     return
// };
