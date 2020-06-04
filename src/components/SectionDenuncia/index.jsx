import React, { Fragment, useState, useEffect, useContext } from 'react';
import complaintHttpClient from '../../services/Api/complaint.httpClient';
import {  useUser } from 'reactfire';
import Denuncias from '../Denuncias';
import ComplaintsContext from '../../context/ComplaintsContext';

const SectionDenuncia = ({state}) => {
    const user = useUser();
    const [complaintsUser, setcomplaintsUser] = useState({});
    const {complaints, setComplaints} = useContext(ComplaintsContext);

    const getComplaints = async () => {
        const res = await complaintHttpClient.getAll();
        
        setComplaints(res.data);
    }

    const getComplaintUser = async () => {
        const res = await complaintHttpClient.getUserId(user);
        setcomplaintsUser(res.data);
    }

    useEffect(()=> {
        getComplaints();
        getComplaintUser()
    },[]);


    return (
            state===0 
                ?   <Fragment>
                        <Denuncias complaints={complaints}/>
                    </Fragment>
                :   <Fragment>
                        <Denuncias complaints={complaintsUser}/>
                    </Fragment>
    )
}

export default SectionDenuncia


