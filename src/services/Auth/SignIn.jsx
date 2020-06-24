import React from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import  { useLocation } from 'wouter';
import { Button } from '@material-ui/core';

const SignIn = ({email, password, username}) => {
    const [, pushLocation] = useLocation();
    const userPhotoURL = 'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/default%2Fusuario.svg?alt=media&token=f2a57817-b672-4679-baf6-b69ea20ed1ba';
    const firebase = useFirebaseApp();

    //Crea la cuenta
    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email,password);
        firebase.auth().onAuthStateChanged( user => {
            if (user) {
                firebase.auth().currentUser.updateProfile({
                    displayName: username,
                    photoURL: userPhotoURL
                }).then(async function  () {
                }, function (error) {
                    console.log(`${error}Error happened`);
                });
                pushLocation('/signin/');
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
                onClick={submit}>
                Sign In
            </Button>
        </div>
     );
}
 
export default SignIn;