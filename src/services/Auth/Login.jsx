import React, {useState} from 'react';
import { useLocation } from 'wouter';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire'
import { Button } from '@material-ui/core'


const Login = ({email, password}) => {
    const firebase = useFirebaseApp();
    const [, pushLocation] = useLocation();
    const [error, setError] = useState(null);

    const login = async () => {
        const algo = await firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                if(error.code === 'auth/invalid-email'){
                    setError('Formato de correo electrónico erroneo o vacio')
                }
                if(error.code === 'auth/wrong-password'){
                    setError('La contraseña es inválida.')
                }
                if(error.code === 'auth/user-not-found'){
                    setError('El usuario no existe.')
                }
            })
        if(algo !== undefined){
            pushLocation('/');
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
                onClick={login}
            >
                Log In
            </Button>
        </div>
     );
}
 
export default Login;