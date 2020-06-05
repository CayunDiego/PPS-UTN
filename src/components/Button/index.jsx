import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useLocation} from 'wouter';

const ButtonCustom = ({ name, url }) => {
    const [,pushLocation] = useLocation();
    const classes = useStyle();
    return ( 
        <Button 
            variant="contained" 
            color="default" 
            className={classes.root} 
            onClick={()=>pushLocation(url)}
            >
            {name}
        </Button>
     );
}
 
export default ButtonCustom;

//ESTILOS
const useStyle = makeStyles({
    root: {
        background: '#00a665',
        color: 'white',
        width: 300,
        marginBottom: 50, 
    }
});