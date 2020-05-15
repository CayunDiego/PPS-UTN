import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button'

//components
import User from '../components/User';
import EditUserName from '../components/EditUserName'
import EditPhoto from '../components/EditPhoto'

const Profile = () => {
  const [editData, setEditData] = useState({
                                          displayName: '',
                                          photoURL:''
                                          })
  const [editClicked, setEditClicked] = useState(false)
  
    return ( 
        <div>
          <EditUserName setEditData={setEditData} setEditClicked={setEditClicked}/>
          <EditPhoto setEditData={setEditData} setEditClicked={setEditClicked}/>
          <User editData={editData} editClicked={editClicked} setEditClicked={setEditClicked}/>
          <Link to='/'>Volver</Link>
        </div>
     );
}
 
export default Profile;