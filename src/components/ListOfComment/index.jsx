import React, {useEffect, useState} from 'react';
import Comment from '../Comment';
import commentHttpClient from '../../services/Api/comment.httpClient'

const ListOfComment = ({idComplaint, newComment}) => {
  const [comments, setComments] = useState([]);
  const [deleted, setdeleted] = useState(false)

  useEffect(()=> {
    commentHttpClient.get(idComplaint)
      .then(res => setComments(res.data));
  },[newComment,idComplaint, deleted]);

    return (
          <div>
            {
              comments.map( ({ID_C,COMMENT, CREATE_AT,VOTE,USER}) => 
                <Comment 
                    key={ID_C} 
                    idC ={ID_C}
                    comment={COMMENT} 
                    createAt={CREATE_AT}
                    vote={VOTE}
                    user={USER}
                    setdeleted={setdeleted}
                />
            )
            }
          </div>
    )
}

export default ListOfComment;