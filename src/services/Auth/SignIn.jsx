import React from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import  { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button'


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
                    window.location = '/signin/';
                }, function (error) {
                    console.log(`${error}Error happened`);
                });
                return (<Redirect to='/signin'/>)
            } else {
              console.log('NO PASO NADA');
            }
          });
    }

    return ( 
        <div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={submit}
            >
                Sign In
            </Button>
            {
                user && <Redirect to='/signin/'/>
            }
        </div>
     );
}
 
export default SignIn;