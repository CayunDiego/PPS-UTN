import React, { useState } from 'react';

import FileUpLoad from '../../services/FileUpLoad'

const EditPhoto = ({setEditData, setEditClicked}) => {
    const [newPhoto, setNewPhoto] = useState('')
    
    

    const click = () => {
        setEditData({
            displayName: '',
            photoURL: newPhoto
        });
        setEditClicked(true);
    }

    return ( 
        <div>
                <FileUpLoad setUpload={setNewPhoto}/> 
                <button onClick={click}>cambiar Photo</button>
        </div>
     );
}
 
export default EditPhoto;