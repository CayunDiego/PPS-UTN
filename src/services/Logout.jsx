import React from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

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
        </div>
     );
}
 
export default Logout;