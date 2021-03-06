import React, {useState} from 'react';
import UserPhoto from '../UserPhoto';
import moment from 'moment';
import 'moment/locale/es';
import { useUser } from 'reactfire';
import commentHttpClient from '../../services/Api/comment.httpClient';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import {newVoteCommentSessionStorage, isExistVoteComment} from '../../helpers/sessionStorage';
moment.locale('es');


const Comment = ({idC,comment,createAt,vote,user, setdeleted}) => {
    const uUser = useUser();
    //un state para el voto
    const [voteCommet, setvoteCommet] = useState(vote);
    const [color, setcolor] = useState(!isExistVoteComment(idC) ? 'primary' : 'inherit');
    const btnDelete = () => {
        return user.ID_U === uUser.uid  ?   <p 
                                                className='comment__btnDelete' 
                                                onClick={handleDelete}>
                                                Eliminar
                                            </p>
                                        :   <div className='comment__vote'>
                                                <ThumbUpAltOutlinedIcon color={color} fontSize='inherit' onClick={handleVote}/>
                                            </div>
    }

    const handleDelete = () => {
        commentHttpClient.deleteId(idC);
        setdeleted(prev => !prev);
    }

    const handleVote = () => {
        if(!isExistVoteComment(idC)){
            commentHttpClient.put(idC);
            setvoteCommet(prev => prev + 1);
            newVoteCommentSessionStorage(idC,uUser);
            setcolor('inherit');
        }
    }

    return (
            <article  className='comment'>
                <UserPhoto tamanio='small' userData={user}/>
                <div className='comment__content'>
                    <p className='comment__text'>
                        <span className='comment__text__displayName'>{user.DISPLAY_NAME}: </span>
                        {comment}
                    </p>
                    <div className='comment__footer'>
                        {moment(createAt).fromNow()}    -   Votos: {voteCommet}
                        {btnDelete()}
                    </div>
                </div>
            </article>
    )
}

export default Comment;