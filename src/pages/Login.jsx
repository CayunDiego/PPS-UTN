import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

     //Se Loguea
     const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    return ( 
        <div>
            ESTO ES EL LOGIN

            <div>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" name="email" id="email" onChange={ ev => setEmail(ev.target.value)}/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" onChange={ ev => setPassword(ev.target.value)}/>
                <button onClick={login}>Iniciar Sesión</button>
            </div>
            {
                user && <Redirect to='/'/>
            }
            <Button variant="outlined" color="default" href="/" 
            disableElevation>
                VOLVER
            </Button>
        </div>
     );
}
 
export default Login;