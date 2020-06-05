import React, { useState } from 'react';
import { useUser } from 'reactfire';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';


const EditUserName = ({setEditData, setEditClicked}) => {
    const [newDisplayName, setNewDisplayName] = useState('')
    const classes = useStyles();
    const user = useUser();

    const handleDisplayName = e =>{
        setNewDisplayName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setEditData({
            displayName: newDisplayName,
            photoURL: ''
        });
        setEditClicked(true);
    }

    return ( 
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="text"
                    id="displayname"
                    label= {user.displayName}
                    name="displayname"
                    autoFocus
                    autoComplete="displayname"
                    onChange={handleDisplayName}
                />
                <Button
                    endIcon={<EditIcon/>}
                    type='submit'
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                    Cambiar UserName
                </Button>
            </form>
     );
}

export default EditUserName;

//ESTILOS
const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
}));