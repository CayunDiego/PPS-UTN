import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
    root: {
        background: '#00a665',
        border: 3,
        color: 'white',
        width: 300
    }
});

const ButtonCustom = ({ name, path }) => {

    const classes = useStyle();

    return ( 
        <Button 
            variant="contained" 
            color="default" 
            className={classes.root} 
            href={path}>
            {name}
        </Button>
     );
}
 
export default ButtonCustom;

