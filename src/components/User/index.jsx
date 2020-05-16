import React, { useEffect } from 'react';
import { useFirebaseApp, useUser } from 'reactfire';


const User = ({editData, editClicked, setEditClicked}) => {
    const firebase = useFirebaseApp();
    const user = useUser();

    useEffect(() =>{
        const setInfo = () =>{
            if(editData.displayName !== ''){
                firebase.auth().currentUser.updateProfile({
                    displayName: editData.displayName
                  }).then(function() {
                    // Update successful.
                    setEditClicked(false);
                  }).catch(function(error) {
                    // An error happened.
                    console.log(`${error}Error happened`);
                  });
            }
            if(editData.photoURL !== ''){
                firebase.auth().currentUser.updateProfile({
                    photoURL: editData.photoURL
                  }).then(function() {
                    // Update successful.
                    setEditClicked(false);
                  }).catch(function(error) {
                    // An error happened.
                    console.log(`${error}Error happened`);
                  });
            }
           
        }
        if(editClicked){
            setInfo();
        }
    },[editClicked]);

    return ( 
        <div>
            {
                user && 
                    <div>
                        <h1>{user.displayName}</h1>
                        <img src={user.photoURL} alt="fotoPerfil" height="100"/>
                    </div>
                
            }
            {
                !user && <p>NO TENGO INFO</p>
            }
            
        </div>
     );
}
 
export default User;