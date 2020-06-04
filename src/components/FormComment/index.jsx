import React, { useState,useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import UserPhoto from '../UserPhoto';
import commentHttpClient from '../../services/Api/comment.httpClient';
import { useUser } from 'reactfire';

const FomrComment = ({id, setnewComment}) => {
    const classes = useStyles();
    const [comment, setComment] = useState('');
    const user = useUser();
    const formComment = useRef()

    const handleComment = e => {
        setComment(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const commentPost = {
            'comment': comment,
            'idComplaint': id,
            'idUser': user.uid
        }
        commentHttpClient.post(commentPost);
        formComment.current.value='';
        setnewComment(prev => !prev);
    }

    return (
        <Card className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <CardContent>
                    <TextField
                        inputRef={formComment}
                        type="text"
                        onChange={handleComment}
                        margin="normal"
                        required
                        fullWidth
                        id="outlined-textarea"
                        placeholder="Comentario"
                        multiline
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <UserPhoto tamanio='small' />
                            </InputAdornment>
                            ),
                        }}
                        />
                    <Button size="small" variant="outlined" color="primary" type="submit">
                        Publicar
                    </Button>
                </CardContent>
            </form>
            
        </Card>
    )
}

export default FomrComment;




const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  }
}));