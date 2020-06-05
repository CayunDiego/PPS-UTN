import React from 'react';
import UserPhoto from '../UserPhoto';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const Comment = ({comment,createAt,vote,user}) => {
    return (
            <div  className='containerComment'>
                <UserPhoto tamanio='small' userData={user}/>
                <div className='userComment'>
                    <p className='comment'><span className='displayName'>{user.DISPLAY_NAME}</span> {comment}</p>
                    <div className='footerComment'>
                        {moment(createAt).fromNow()}    -   Votos: {vote}
                        <button>Eliminar</button>
                    </div>
                </div>
            </div>
    )
}

export default Comment;