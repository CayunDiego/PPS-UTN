import React, { useState } from 'react';

const EditUserName = ({setEditData, setEditClicked}) => {
    const [newDisplayName, setNewDisplayName] = useState('')
    
    const handleDisplayName = e =>{
        setNewDisplayName(e.target.value)
    }

    const click = () => {
        setEditData({
            displayName: newDisplayName,
            photoURL: ''
        });
        setEditClicked(true);
    }

    return ( 
        <div>
                <label htmlFor="displayname"></label>
                <input type="text" name="displayname" id="displayname"  onChange={handleDisplayName}/>
                <button onClick={click}>cambiar displayName</button>
           
        </div>

     );
}
 
export default EditUserName;