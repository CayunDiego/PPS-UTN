import React from 'react';
import UserPhoto from '../UserPhoto';
import moment from 'moment';
import 'moment/locale/es';
import { useUser } from 'reactfire';
import { Link } from 'wouter';
import commentHttpClient from '../../services/Api/comment.httpClient'
moment.locale('es');


const Comment = ({idC,comment,createAt,vote,user, setdeleted}) => {
    const uUser = useUser();

    const btnDelete = () => {
        return user.ID_U === uUser.uid  && <p 
                                                className='btnDeleteComment' 
                                                onClick={handleDelete}>
                                                Eliminar
                                            </p>
    }

    const handleDelete = () => {
        commentHttpClient.deleteId(idC);
        setdeleted(prev => !prev);
    }

    return (
            <div  className='containerComment'>
                <UserPhoto tamanio='small' userData={user}/>
                <div className='userComment'>
                    <p className='comment'><span className='displayName'>{user.DISPLAY_NAME}</span> {comment}</p>
                    <div className='footerComment'>
                        {moment(createAt).fromNow()}    -   Votos: {vote}
                        {btnDelete()}
                    </div>
                </div>
            </div>
    )
}

export default Comment;