import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    //const user = useUser();

    //Crea la cuenta
    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    return ( 
        <div>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" id="email" onChange={ ev => setEmail(ev.target.value)}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" onChange={ ev => setPassword(ev.target.value)}/>
            <button onClick={submit}>Crear cuenta</button>
        </div>
     );
}
 
export default SignIn;