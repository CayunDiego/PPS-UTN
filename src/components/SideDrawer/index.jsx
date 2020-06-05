import React from 'react';
import { useUser } from 'reactfire';
import { makeStyles } from '@material-ui/core/styles';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider} from '@material-ui/core';
import { EmojiEmotionsOutlined } from '@material-ui/icons';
import UserPhoto from '../UserPhoto';
import Copyright from '../Copyright';
import Logout from '../../services/Auth/Logout'
import { useLocation } from 'wouter';

const SideDrawer = ({show}) => {
    const [, pushLocation] = useLocation();
    const user = useUser();
    let drawerClasses = 'side-drawer';
    if(show){
        drawerClasses = 'side-drawer open';
    }
    const classes = useStyles();

    return (
        <nav className={drawerClasses}>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <ListItem button divider>
                    <div className='perfil'>
                        <UserPhoto tamanio='medium'/>
                        <div className='displayName'>{user && user.displayName}</div>
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
                <Logout/>
            </List>
            <div className='footerDrawer'>
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