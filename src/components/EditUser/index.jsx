import React, { useEffect } from 'react';
import { useFirebaseApp, useUser } from 'reactfire';
import userHttpClient from '../../services/Api/user.httpClient'
import UserPhoto from '../UserPhoto'

const User = ({editData, editClicked, setEditClicked}) => {
    const firebase = useFirebaseApp();
    const user = useUser();

    useEffect(() =>{
        const setInfo = () =>{
            let updateUser = {};
            if(editData.displayName !== ''){
              updateUser = {'displayName': editData.displayName,
                            'photoURL': user.photoURL
              }
            }
            if(editData.photoURL !== ''){
              updateUser = {'displayName': user.displayName,
                            'photoURL': editData.photoURL}
            }
            //ESTO TIENE QUE ESTAR EN EL SERVICE
              firebase.auth().currentUser.updateProfile(updateUser)
                .then(function() {
                // Update successful.
                setEditClicked(false);
              }).catch(function(error) {
                // An error happened.
                console.log(`${error}Error happened`);
              });
              userHttpClient.put(updateUser,user);
        }
        if(editClicked){
            setInfo();
        }
    });

    return ( 
          <div className='cardUser'>
            <div>
              <h1>{user.displayName}</h1>
              <p>{user.email}</p>
            </div>
              <UserPhoto tamanio='large'/>
          </div>
     );
}
 
export default User;