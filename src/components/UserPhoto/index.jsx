import React from 'react';
import { useUser } from 'reactfire'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const UserPhoto = ({tamanio='large', userData = null }) => {
    const user = useUser();
    const classes = useStyles();

    let photoURL = user.photoURL;
    let displayName = user.displayName;

    if(userData!==null){
      photoURL = userData.PHOTO_URL;
      displayName = userData.DISPLAY_NAME;
    }
    
    return ( 
       user &&
        <div className={classes.root}>
            {
              tamanio === 'large' &&
                <Avatar 
                    alt={displayName} 
                    src={photoURL} 
                    className={classes.large}>X
                </Avatar>
            }
            {
              tamanio === 'medium' &&
                <Avatar 
                    alt={displayName} 
                    src={photoURL} 
                    className={classes.medium}>X
                </Avatar>
            }
            {
              tamanio === 'small' &&
                <Avatar 
                    alt={displayName} 
                    src={photoURL} 
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
  medium: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));