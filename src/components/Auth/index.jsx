import React, { Fragment, useState } from 'react';

//MaterialUI
import Button from '@material-ui/core/Button';

//components
import SignIn from '../../services/SignIn';
import Login from '../../services/Login';

const Auth = ({type}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    
    return ( 
        <Fragment>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" id="email" onChange={ ev => setEmail(ev.target.value)}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" onChange={ ev => setPassword(ev.target.value)}/>
            {type === 'signin' && ( <div>
                                        <label htmlFor="username">UserName</label>
                                        <input type="username" name="username" id="username" onChange={ ev => setUserName(ev.target.value)}/>
                                        <SignIn email={email} password={password} username={userName}/>
                                    </div>) 
            }
             {type === 'login' && <Login email={email} password={password}/>
            }
            <Button variant="outlined" color="default" href="/" 
            disableElevation>
                VOLVER
            </Button>
        </Fragment>
     );
}
 
export default Auth;