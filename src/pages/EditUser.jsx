import React, { useState, useEffect } from 'react';
import FileUpLoad from '../services/FileUpLoad'
import { useFirebaseApp } from 'reactfire';
import { Link } from 'react-router-dom'

const EditUser = () => {
    const [userPhoto, setUserPhoto] = useState('');
    const firebase = useFirebaseApp();

    useEffect(()=>{
        firebase.auth().onAuthStateChanged( user => {
            if (user) {
                firebase.auth().currentUser.updateProfile({
                    //displayName: username,
                    photoURL: userPhoto
                }).then(async function  () {
              
                }, function (error) {
                    console.log(`${error}Error happened`);
                });
            } else {
              console.log('NO PASO NADA');
            }
        });
    });

    return ( 
        <div>
            <FileUpLoad setUserPhoto={setUserPhoto}/>
            <Link to='/'>Volver</Link>
        </div>
     );
}
 
export default EditUser;