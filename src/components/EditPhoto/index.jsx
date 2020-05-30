import React, { useState, useEffect } from 'react';
import FileUpLoad from '../../services/FileUpLoad';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const EditPhoto = ({setEditData, setEditClicked}) => {
    const [newPhoto, setNewPhoto] = useState('');
    const [disabled, setdisabled] = useState(true)
    const classes = useStyles();

    useEffect(()=>{
        if(newPhoto!==''){
            setdisabled(false);
        }
    },[newPhoto]);

    const handleClick = () => {
        setEditData({
            displayName: '',
            photoURL: newPhoto
        });
        setEditClicked(true);
    }

    return ( 
        <div>
                <FileUpLoad setUpload={setNewPhoto} folder='profilePhoto'/> 
                <Button
                    endIcon={<EditIcon/>}
                    type='button'
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={disabled}
                    onClick={handleClick}>
                    Cambiar Foto
                </Button>
        </div>
     );
}
 
export default EditPhoto;

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