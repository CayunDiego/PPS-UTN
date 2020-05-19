import React from 'react';
import { useUser } from 'reactfire'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const UserPhoto = ({tamanio='large'}) => {
    const user = useUser();
    const classes = useStyles();

    return ( 
       user &&
        <div className={classes.root}>
            {
              tamanio === 'large' &&
                <Avatar 
                    alt={user.displayName} 
                    src={user.photoURL} 
                    className={classes.large}>X
                </Avatar>
            }
            {
              tamanio === 'small' &&
                <Avatar 
                    alt={user.displayName} 
                    src={user.photoURL} 
                    className={classes.small}>X
                </Avatar>
            }
        </div>
     );
}
 
export default UserPhoto;

//ESTILOS
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));