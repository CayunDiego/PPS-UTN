import React, {useState, useEffect} from 'react';
import FileUpLoad from '../../services/FileUpLoad'

const FormPhoto = ({handleChangePhoto}) => {
    const [newPhoto, setNewPhoto] = useState('');

    useEffect(()=>{
        handleChangePhoto(newPhoto);
    },[newPhoto,handleChangePhoto]);

    return (
        <div >
            <FileUpLoad setUpload={setNewPhoto} folder='DenunciaPhoto'/> 
            {newPhoto !== '' && <img src={newPhoto} alt="DenunciaPhoto" />}
        </div>
    )
}

export default FormPhoto
