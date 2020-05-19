import React, { Fragment, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import SignIn from './SignIn';
import Login from './Login';
import Grid from '@material-ui/core/Grid'

const Auth = ({type}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
  
    const classes = useStyles();

    const handleSubmit = e => {
      e.preventDefault();
    }

    return ( 
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                {type}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                        <TextField
                          
                            margin="normal"
                            required
                            fullWidth
                            type="email"
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            autoComplete="email"
                            onChange={ ev => setEmail(ev.target.value)}
                        />
                        <TextField
                            
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={ ev => setPassword(ev.target.value)}
                        />
                        {type === 'Sign in' &&
                        <Fragment>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="text"
                                id="username"
                                label="User Name"
                                name="username"
                                autoComplete="username"
                                onChange={ ev => setUserName(ev.target.value)}
                                />
                            <SignIn email={email} password={password} username={userName}/>
                        </Fragment>
                        }
                        {type === 'Log In' &&
                            <Fragment>
                              <Login email={email} password={password}/>
                              <Grid container className={classes.form}> 
                                <Grid item>
                                  <Link href="/signin/" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                  </Link>
                                </Grid>
                              </Grid>
                            </Fragment>
                        }
                        <Button
                            fullWidth
                            variant="contained"
                            color="inherit"
                            className={classes.submit}
                            href="/"
                        >
                            Volver
                        </Button>
                  </form>
            </div>
        </Container>
     );
}
 
export default Auth;

//ESTILOS
const useStyles = makeStyles((theme) => ({
  paper: {
    //marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(5, 0, 2),
  },
}));