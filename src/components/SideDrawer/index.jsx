import React from 'react';
import { useUser } from 'reactfire';
import { makeStyles } from '@material-ui/core/styles';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider} from '@material-ui/core';
import { EmojiEmotionsOutlined, PersonPinOutlined } from '@material-ui/icons';
import UserPhoto from '../UserPhoto';
import Copyright from '../Copyright';
import Logout from '../../services/Auth/Logout'
import { useLocation } from 'wouter';

const SideDrawer = ({show}) => {
    const [, pushLocation] = useLocation();
    const user = useUser();
    let drawerClasses = 'sideDrawer';
    if(show){
        drawerClasses = 'sideDrawer--open';
    }
    const classes = useStyles();

    return (
        <nav className={drawerClasses}>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <ListItem button divider>
                    <div className='sideDrawer__profile'>
                        <UserPhoto tamanio='medium'/>
                        <div className='sideDrawer__profile__displayName'>{user && user.displayName}</div>
                    </div>
                </ListItem>
                <ListItem button onClick={()=>pushLocation('/profile/')}>
                    <ListItemAvatar>
                        <Avatar>
                            <EmojiEmotionsOutlined />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Editar Perfil" />
                </ListItem>
                {/* <ListItem button>
                    <ListItemText primary="ALGO" />
                </ListItem> */}
                 <ListItem button onClick={()=>pushLocation('/maps/')}>
                    <ListItemAvatar>
                        <Avatar>
                            <PersonPinOutlined />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Mapa Denuncias" />
                </ListItem>
                <Logout/>
            </List>
            <div className='sideDrawer__footer'>
                <Divider/>
                <Copyright/>
            </div>
        </nav>
    )
}

export default SideDrawer


//ESTILOS
const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 360,
    },
  });