import React, {useState} from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import  { useLocation } from 'wouter';
import { Button } from '@material-ui/core';

const SignIn = ({email, password, username}) => {
    const [, pushLocation] = useLocation();
    const [error, setError] = useState(null);
    const userPhotoURL = 'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/default%2Fusuario.svg?alt=media&token=f2a57817-b672-4679-baf6-b69ea20ed1ba';
    const firebase = useFirebaseApp();

    //Crea la cuenta
    const submit = async () => {
        if (username !== '') {
            await firebase.auth().createUserWithEmailAndPassword(email,password)
                    .catch(error => {
                        console.log(error)
                        if(error.code === 'auth/invalid-email'){
                            setError('Formato de correo electrónico erroneo o vacio.')
                        }
                        if(error.code === 'auth/weak-password'){
                            setError('La contraseña debe tener 6 caracteres o más.')
                        }
                        if(error.code === 'auth/email-already-in-use'){
                            setError('La dirección de correo electrónico ya está siendo utilizada por otra cuenta.')
                        }
                    })
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
                }
            });
        } else {
            setError('Ingrese un nombre de usuario.')
        }
    }

    return ( 
        <div>
            {error !== null && <div className='loginError'>
                                <p className='loginError__text'>{error}</p>
                             </div>
            }
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