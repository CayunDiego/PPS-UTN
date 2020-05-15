import React from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import  { Redirect } from 'react-router-dom';


const SignIn = ({email, password, username}) => {
    const userPhotoURL = 'https://yrlist.ru/portal/img/no_photo.png' 

    const firebase = useFirebaseApp();
    const user = useUser();

    //Crea la cuenta
    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email,password);
        firebase.auth().onAuthStateChanged( user => {
            if (user) {
                firebase.auth().currentUser.updateProfile({
                    displayName: username,
                    photoURL: userPhotoURL
                }).then(async function  () {
                    //Esto anda, pero debería ser con el componente de REACT
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
            ESTO ES EL SIGN IN
            <button onClick={submit}>Crear cuenta</button>
            {
                user && <Redirect to='/'/>
            }
        </div>
     );
}
 
export default SignIn;