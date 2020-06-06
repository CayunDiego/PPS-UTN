import React from 'react';
import { useUser } from 'reactfire';
import IconButton from '@material-ui/core/IconButton';
import {HowToReg, Delete} from '@material-ui/icons';
import complaintHttpClient from '../../services/Api/complaint.httpClient'

const ButtonActionComplaint = ({userC, id}) => {
    const user = useUser();

    const handleDelete = () => {
        console.log(id);
        complaintHttpClient.deleteId(id);

    }

    const handleVote = () => {
        console.log(id);
    }


    const buttonAction = () => {
        if(userC !== null){
            return userC.ID_U === user.uid && <IconButton aria-label="add to favorites" onClick={handleDelete}>
                                                <Delete color='secondary'/>
                                              </IconButton> 
        }

        return  <IconButton aria-label="add to favorites" onClick={handleVote}>
                    <HowToReg color='secondary'/>
                </IconButton>
    }


    return ( buttonAction() )
}

export default ButtonActionComplaint;
