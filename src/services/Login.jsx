import React from 'react';
import  { Redirect } from 'react-router-dom';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire'

const Login = ({email, password}) => {
    const firebase = useFirebaseApp();
    const user = useUser();

     const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    return ( 
        <div>
            ESTO ES EL LOGIN
            <div>
                <button onClick={login}>Iniciar Sesión</button>
            </div>
            {
                user && <Redirect to='/'/>
            }
        </div>
     );
}
 
export default Login;