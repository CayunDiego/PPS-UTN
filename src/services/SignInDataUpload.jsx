import React, { useState, Suspense } from 'react';
import {  useUser, useDatabase } from 'reactfire';
import  { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserPhoto from '../components/UserPhoto'

import Copyright from '../components/Copyright'

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      marginBotton: theme.spacing(2),
      padding: 10
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const SignInDataUpload = () => {
    const [redirect, setRedirect] = useState(false);
    const [nombre, setnombre] = useState('');
    const [apellido, setapellido] = useState('');
    const [documento, setdocumento] = useState('');
    const user = useUser();
    const db = useDatabase();


    const click = async () => {
        // e.preventDefault();
        // console.log(e);
        // const [nombre, apellido, documento] = e.target.elements;
        // console.log(e.target.elements);
        // const datosUser = {
        //                     id: user.uid,
        //                     nombre: nombre.value,
        //                     apellido: apellido.value,
        //                     documento: documento.value
        //                   }
       console.log('entro');
        const datosUser = {
                            id: user.uid,
                            nombre: nombre,
                            apellido: apellido,
                            documento: documento
                          }
        await db.ref('/users').push(datosUser);
        setRedirect(true);
    }
    

    const classes = useStyles();


    return ( 
      <Suspense>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <div className={classes.avatar}>
                    <UserPhoto />
                </div>
                <Typography component="h2" variant="h4">
                Bienvenido {user.displayName}
                </Typography>
                {!redirect &&
                     
                        <div >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="text"
                                id="nombre"
                                label="nombre"
                                name="nombre"
                                autoFocus
                                autoComplete="nombre"
                                onChange={ ev => setnombre(ev.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="apellido"
                                label="apellido"
                                type="text"
                                id="apellido"
                                autoComplete="apellido"
                                onChange={ ev => setapellido(ev.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="documento"
                                label="documento"
                                type="number"
                                id="documento"
                                autoComplete="documento"
                                onChange={ ev => setdocumento(ev.target.value)}
                            />
                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={click}
                            >
                                Aceptar
                            </Button>
                        
                        </div>
                 
                }
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            {
                 redirect && <Redirect to='/'/>
             }
        </Container>
      </Suspense>
        
     );
}
 
export default SignInDataUpload;