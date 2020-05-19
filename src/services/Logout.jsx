import React from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import  { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button'

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
                    <Button 
                        variant="text" 
                        color="inherit" 
                        size="small" 
                        onClick={logout}>
                        Cerrar Sesión
                    </Button>
            }
            {
                !user && <Redirect to='/'/>
            }
        </div>
     );
}
 
export default Logout;