import React, { useState,useRef } from 'react';
import { useUser } from 'reactfire';
import commentHttpClient from '../../services/Api/comment.httpClient';
import './formComment.css';
import { Button, TextField, InputAdornment} from '@material-ui/core';
import UserPhoto from '../UserPhoto';


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