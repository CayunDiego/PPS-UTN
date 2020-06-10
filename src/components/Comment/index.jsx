import React, {useState} from 'react';
import UserPhoto from '../UserPhoto';
import moment from 'moment';
import 'moment/locale/es';
import { useUser } from 'reactfire';
import commentHttpClient from '../../services/Api/comment.httpClient';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
moment.locale('es');


const Comment = ({idC,comment,createAt,vote,user, setdeleted}) => {
    const uUser = useUser();
    //un state para el voto
    const [voteCommet, setvoteCommet] = useState(vote)
    const btnDelete = () => {
        return user.ID_U === uUser.uid  ?   <p 
                                                className='btnDeleteComment' 
                                                onClick={handleDelete}>
                                                Eliminar
                                            </p>
                                        :   <div className='voteComment'>
                                                <ThumbUpAltOutlinedIcon color='primary' fontSize='inherit' onClick={handleVote}/>
                                            </div>
    }

    const handleDelete = () => {
        commentHttpClient.deleteId(idC);
        setdeleted(prev => !prev);
    }

    const handleVote = () => {
        commentHttpClient.put(idC);
        setvoteCommet(prev => prev + 1);
    }

    return (
            <div  className='containerComment'>
                <UserPhoto tamanio='small' userData={user}/>
                <div className='userComment'>
                    <p className='comment'><span className='displayName'>{user.DISPLAY_NAME}</span> {comment}</p>
                    <div className='footerComment'>
                        {moment(createAt).fromNow()}    -   Votos: {voteCommet}
                        {btnDelete()}
                    </div>
                </div>
            </div>
    )
}

export default Comment;