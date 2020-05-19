import React from 'react';
import  { Redirect } from 'react-router-dom';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire'
import Button from '@material-ui/core/Button'

const Login = ({email, password}) => {
    const firebase = useFirebaseApp();
    const user = useUser();

     const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
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
            {
                user && <Redirect to='/'/>
            }
        </div>
     );
}
 
export default Login;