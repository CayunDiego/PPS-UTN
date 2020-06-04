import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useUser } from 'reactfire';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import UserPhoto from '../UserPhoto';
import Copyright from '../Copyright';
import Logout from '../../services/Auth/Logout'
import {useLocation} from 'wouter';

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
                            <EmojiEmotionsOutlinedIcon />
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
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
    },
  }));