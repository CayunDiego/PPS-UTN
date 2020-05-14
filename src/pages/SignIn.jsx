import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import  { Redirect } from 'react-router-dom';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [userPhoto, setUserPhoto] = useState('https://ep01.epimg.net/cultura/imagenes/2019/05/09/actualidad/1557400226_745093_1557400441_noticia_normal.jpg');

    const firebase = useFirebaseApp();
    const user = useUser();

    //Crea la cuenta
    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email,password);
        firebase.auth().onAuthStateChanged( user => {
            if (user) {
                firebase.auth().currentUser.updateProfile({
                    displayName: username,
                    photoURL: userPhoto
                }).then(async function  () {
                    //Esto anda, pero debería ser con el componente de REACT
                    //await firebase.auth().signOut();
                    window.location = '/';
                }, function (error) {
                    console.log(`${error}Error happened`);
                });
                return (<Redirect to='/'/>)
            } else {
              console.log('NO PASO NADA');
            }
          });
    }

    return ( 
        <div>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" id="email" onChange={ ev => setEmail(ev.target.value)}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" onChange={ ev => setPassword(ev.target.value)}/>
            <label htmlFor="username">UserName</label>
            <input type="username" name="username" id="username" onChange={ ev => setUsername(ev.target.value)}/>
            <button onClick={submit}>Crear cuenta</button>
            {
                user && <Redirect to='/'/>
            }
        </div>
     );
}
 
export default SignIn;