import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'wouter';

// import Collapse from '@material-ui/core/Collapse';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import ShareIcon from '@material-ui/icons/Share';

import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const DenunciaBETA = ({complaint, children}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const photoAvatar = complaint.USER !== null ? complaint.USER.PHOTO_URL : '';

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={photoAvatar}>
            X
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title= {complaint.TYPE_WORK.TYPE}
        subheader= { moment(complaint.CREATE_AT).fromNow() }
      />
      <Link to={`/denuncia/${complaint.ID}`} key={complaint.ID}>
        <CardMedia
          className={classes.media}
          image= {complaint.PHOTO_URL}
          title= "Paella dish"
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {complaint.DESCRIPTION}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      {children}
    </Card>
  );
}

export default DenunciaBETA;

//ESTILOS
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 300,
    marginBottom: 30

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));