import React, { useState,useRef } from 'react';
import './formComment.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import UserPhoto from '../UserPhoto';
import commentHttpClient from '../../services/Api/comment.httpClient';
import { useUser } from 'reactfire';

const FomrComment = ({id, setnewComment}) => {
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
            <form className='formContainer' onSubmit={handleSubmit}>
                    <TextField
                        inputRef={formComment}
                        type="text"
                        onChange={handleComment}
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
            </form>
    )
}

export default FomrComment;