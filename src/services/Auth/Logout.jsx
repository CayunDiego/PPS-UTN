import React from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import  { Redirect} from 'react-router-dom';

import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Logout = () => {
    const firebase = useFirebaseApp();
    const user = useUser();
    
     //Cierra Sesión
     const logout = async () => {
        await firebase.auth().signOut();
    }

    return ( 
        <div>
            {
                user &&
                    // <Button 
                    //     variant="text" 
                    //     color="inherit" 
                    //     size="small" 
                    //     onClick={logout}>
                    // </Button>
                    <ListItem button onClick={logout}>
                        <ListItemAvatar>
                            <Avatar>
                                <ExitToAppOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Salir">
                            <Logout/>
                        </ListItemText>
                    </ListItem>
            }
            {
                !user && <Redirect to='/'/>
            }
        </div>
     );
}
 
export default Logout;