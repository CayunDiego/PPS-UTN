import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


//components
import EditUser from '../components/EditUser';
import EditUserName from '../components/EditUserName'
import EditPhoto from '../components/EditPhoto'
import Layout from '../pages/Layout'

const Profile = () => {
    const classes = useStyles();

    const [editData, setEditData] = useState({
                                          displayName: '',
                                          photoURL:''
                                          })
    const [editClicked, setEditClicked] = useState(false)
    return ( 
      <Layout>
          <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
              <EditUser editData={editData} editClicked={editClicked} setEditClicked={setEditClicked}/>
              <EditUserName setEditData={setEditData} setEditClicked={setEditClicked}/>
              <EditPhoto setEditData={setEditData} setEditClicked={setEditClicked}/>
            </CardContent>
          </Card>
      </Layout>
     );
}

export default Profile;


//ESTILOS
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 30
  },
  cardContent: {

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});