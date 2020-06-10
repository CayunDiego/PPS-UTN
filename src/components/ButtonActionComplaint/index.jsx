import React from 'react';
import { useUser } from 'reactfire';
import IconButton from '@material-ui/core/IconButton';
import {HowToReg, Delete} from '@material-ui/icons';
import complaintHttpClient from '../../services/Api/complaint.httpClient';


import {useComplaintsUpdate} from '../../hooks/useComplaintsUpdate';

const ButtonActionComplaint = ({userC, id}) => {
    const user = useUser();
    const { setClick } = useComplaintsUpdate();

    const handleDelete = () => {
        complaintHttpClient.deleteId(id);
        setClick(id);
    }

    const handleVote = () => {
        console.log(id);
    }


    const buttonAction = () => {
        if(userC !== null){
            return userC.ID_U === user.uid  ? <IconButton aria-label="add to favorites" onClick={handleDelete}>
                                                <Delete color='secondary'/>
                                              </IconButton> 
                                            : <IconButton aria-label="add to favorites" onClick={handleVote}>
                                                <HowToReg color='secondary'/>
                                              </IconButton>
        }

        return  <IconButton aria-label="add to favorites" onClick={handleVote}>
                    <HowToReg color='secondary'/>
                </IconButton>
    }


    return ( buttonAction() )
}

export default ButtonActionComplaint;
