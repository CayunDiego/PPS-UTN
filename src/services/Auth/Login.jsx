import React from 'react';
import { useLocation } from 'wouter';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire'
import { Button } from '@material-ui/core'

const Login = ({email, password}) => {
    const firebase = useFirebaseApp();
    const [, pushLocation] = useLocation();
    
    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        pushLocation('/')
    }

    return ( 
        <div>
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