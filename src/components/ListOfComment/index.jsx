import React, {useEffect, useState} from 'react';
import Comment from '../Comment';
import commentHttpClient from '../../services/Api/comment.httpClient';
import SwitchOrdenar from '../SwitchOrdenar';

const ListOfComment = ({idComplaint, newComment}) => {
  const [comments, setComments] = useState([]);
  const [deleted, setdeleted] = useState(false);
  const [checked, setChecked] = useState(false);
  
  const ordenarVote = () => {
    comments.sort(function (a, b) {
      return b.VOTE - a.VOTE;
    });
  }

  const ordenarId = () => {
    comments.sort(function (a, b) {
      return b.ID_C - a.ID_C;
    });
  }

  useEffect(()=> {
    commentHttpClient.get(idComplaint)
      .then(res => setComments(res.data));
  },[newComment,idComplaint, deleted]);

  useEffect(()=> {
    checked === false ? ordenarVote() : ordenarId();
  },[ordenarVote,ordenarId,checked]);

    return (
          <div>
            <SwitchOrdenar checked={checked} setChecked={setChecked}/>
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