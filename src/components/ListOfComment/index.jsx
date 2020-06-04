import React, {useEffect, useState} from 'react';
import Comment from '../Comment';
import commentHttpClient from '../../services/Api/comment.httpClient'

const ListOfComment = ({idComplaint, newComment}) => {
  const [comments, setComments] = useState([]);
    //tengo que recuperar los comentarios
    const getComments = async () => {
      const res = await commentHttpClient.get(idComplaint);
      setComments(res.data);
  }

  useEffect(()=> {
    getComments();
  },[newComment]);

    return (
          <div>
            {
              comments.map( ({ID_C,COMMENT, CREATE_AT,VOTE,USER}) => 
                <Comment 
                    key={ID_C} 
                    comment={COMMENT} 
                    createAt={CREATE_AT}
                    vote={VOTE}
                    user={USER}
                />
            )
            }
          </div>
    )
}

export default ListOfComment;