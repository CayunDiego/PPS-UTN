import React from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { useLocation } from 'wouter';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import {ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

const Logout = () => {
    const [, pushLocation] = useLocation();
    const firebase = useFirebaseApp();
    const user = useUser();
    
     //Cierra Sesión
     const logout = async () => {
        await firebase.auth().signOut();
        sessionStorage.clear();
        pushLocation('/');
    }

    return ( 
        <div>
            {
                user &&
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
        </div>
     );
}
 
export default Logout;