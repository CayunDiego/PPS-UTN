import React from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import  { Redirect } from 'react-router-dom';

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
                user && <button onClick={logout}>Cerrar Sesión</button>
            }
            {
                !user && <Redirect to='/'/>
            }
        </div>
     );
}
 
export default Logout;