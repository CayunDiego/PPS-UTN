import React, { useState } from 'react';
import './profile.css';
import EditUser from '../../components/EditUser';
import EditUserName from '../../components/EditUserName';
import EditPhoto from '../../components/EditPhoto';
import Layout from '../Layout';

const Profile = () => {
    const [editData, setEditData] = useState({
                                          displayName: '',
                                          photoURL:''
                                          })
    const [editClicked, setEditClicked] = useState(false)
    return ( 
      <Layout>
          <div className='cardProfile'>
              <EditUser editData={editData} editClicked={editClicked} setEditClicked={setEditClicked}/>
              <EditUserName setEditData={setEditData} setEditClicked={setEditClicked}/>
              <EditPhoto setEditData={setEditData} setEditClicked={setEditClicked}/>
          </div>
      </Layout>
     );
}

export default Profile;