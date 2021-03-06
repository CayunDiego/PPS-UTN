import React, { useState } from 'react';
import {  useUser } from 'reactfire';
import  { useLocation } from 'wouter';
import { Button, CssBaseline, TextField, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserPhoto from '../../components/UserPhoto'
import userHttpClient from '../../services/Api/user.httpClient'

const SignInDataUpload = () => {
  const [, pushLocation] = useLocation();
    const [nombre, setnombre] = useState('');
    const [apellido, setapellido] = useState('');
    const [documento, setdocumento] = useState('');
    const user = useUser();
    const classes = useStyles();
    const [error, setError] = useState(null);

    const handleSubmit = async e => {
       e.preventDefault();
        if(nombre === ''){
          setError('Error: Ingrese Nombre.');
        } else {
          if(apellido === ''){
            setError('Error: Ingrese Apellido.');
          } else {
            if(documento === ''){
              setError('Error: Ingrese su numero de Documento.');
            }
            else {
              setError(null);
              const datosUser = {
                idUser: user.uid,
                displayName: user.displayName,
                firstName: nombre,
                lastName: apellido,
                document: documento,
                photoURL: user.photoURL
              }
              await userHttpClient.post(datosUser);
              pushLocation('/');
            }
          }
        }
    }

    return ( 
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <div className={classes.avatar}>
                    <UserPhoto />
                </div>
                <Typography component="h2" variant="h5">
                  Bienvenido 
                </Typography>
                <Typography component="h2" variant="h4">
                  {user.displayName}
                </Typography>
                        <form className={classes.form}>
                            <TextField
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
                            {error !== null && <div className='loginError'>
                                                 <p className='loginError__text'>{error}</p>
                                               </div>
                            }
                            <Button
                                type='submit'
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleSubmit}>
                                Aceptar
                            </Button>
                        </form>
            </div>
        </Container>
     );
}

export default SignInDataUpload;

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
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(5, 0, 2),
  },
}));