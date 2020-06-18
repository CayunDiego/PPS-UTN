import React, { useState } from 'react';
import { useUser } from 'reactfire';
import IconButton from '@material-ui/core/IconButton';
import {HowToReg, Delete} from '@material-ui/icons';
import complaintHttpClient from '../../services/Api/complaint.httpClient';
import {useComplaintsUpdate} from '../../hooks/useComplaintsUpdate';
import { newVoteSessionStorage, isExistVote } from '../../helpers/sessionStorage';

const ButtonActionComplaint = ({userC, id, setVote}) => {
    const user = useUser();
    const { setClick } = useComplaintsUpdate();
    const [color, setcolor] = useState(!isExistVote(id) ? 'secondary' : 'inherit')

    const handleDelete = () => {
        complaintHttpClient.deleteId(id);
        setClick(id);
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
                                                <Delete color='secondary'/>
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
