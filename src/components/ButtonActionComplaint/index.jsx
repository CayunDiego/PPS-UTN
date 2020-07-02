import React, { useState } from 'react';
import { useUser } from 'reactfire';
import IconButton from '@material-ui/core/IconButton';
import {HowToReg, Delete} from '@material-ui/icons';
import complaintHttpClient from '../../services/Api/complaint.httpClient';
import {useComplaintsUpdate} from '../../hooks/useComplaintsUpdate';
import { newVoteSessionStorage, isExistVote, isDeleted } from '../../helpers/sessionStorage';

const ButtonActionComplaint = ({userC, id, setVote, state}) => {
    const user = useUser();
    const { setClick } = useComplaintsUpdate();
    const [color, setcolor] = useState(!isExistVote(id) ? 'secondary' : 'inherit');
    const colorDelete = isDeleted(state) ? 'secondary' : 'inherit';

    const handleDelete = () => {
        if(isDeleted(state)){
            complaintHttpClient.deleteId(id);
            setClick(id);
        }
    }

    const handleVote = () => {
        if(!isExistVote(id)){
            complaintHttpClient.put(id);
            setVote(prev => prev +1);
            newVoteSessionStorage(id, user);
            setcolor('inherit');
        }
    }

    const buttonAction = () => {
        if(userC !== null){
            return userC.ID_U === user.uid  ? <IconButton aria-label="add to favorites" onClick={handleDelete}>
                                                <Delete color={colorDelete}/>
                                              </IconButton> 
                                            : <IconButton aria-label="add to favorites" onClick={handleVote} >
                                                <HowToReg color={color}/>
                                              </IconButton>
        }

        return  <IconButton aria-label="add to favorites" onClick={handleVote}>
                    <HowToReg color={color}/>
                </IconButton>
    }


    return ( buttonAction() )
}

export default ButtonActionComplaint;
