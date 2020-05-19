import React, { useEffect } from 'react';
import { useFirebaseApp, useUser } from 'reactfire';

import UserPhoto from '../UserPhoto'

const User = ({editData, editClicked, setEditClicked}) => {
    const firebase = useFirebaseApp();
    const user = useUser();

    useEffect(() =>{
      console.log('render');
        const setInfo = () =>{
            let updateUser = {};
            if(editData.displayName !== ''){
              updateUser = {displayName: editData.displayName,
                            photoURL: user.photoURL
              }
            }
            if(editData.photoURL !== ''){
              updateUser = {displayName: user.displayName,
                            photoURL: editData.photoURL}
            }
              firebase.auth().currentUser.updateProfile(updateUser)
                .then(function() {
                // Update successful.
                setEditClicked(false);
              }).catch(function(error) {
                // An error happened.
                console.log(`${error}Error happened`);
              });
        }
        if(editClicked){
            setInfo();
        }
    });

    return ( 
        <div>
            {
                user && 
                    <div>
                        <h1>{user.displayName}</h1>
                        <UserPhoto tamanio='large'/>
                    </div>
                
            }
            {
                !user && <p>NO TENGO INFO</p>
            }
            
        </div>
     );
}
 
export default User;