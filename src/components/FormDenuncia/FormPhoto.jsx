import React, {useState, useEffect} from 'react';
import FileUpLoad from '../../services/FileUpLoad';

const FormPhoto = ({handleChangePhoto}) => {
    const [newPhoto, setNewPhoto] = useState('');

    useEffect(()=>{
        handleChangePhoto(newPhoto);
    },[newPhoto,handleChangePhoto]);

    return (
        <div className='formUploadPhoto'>
            <FileUpLoad setUpload={setNewPhoto} folder='DenunciaPhoto'/> 
            {newPhoto !== '' && <img className='formUploadPhoto__photo' src={newPhoto} alt="DenunciaPhoto" />}
        </div>
    )
}

export default FormPhoto
