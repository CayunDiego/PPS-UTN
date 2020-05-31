import React, { Fragment, useState, useEffect } from 'react';
import complaintHttpClient from '../../services/Api/complaint.httpClient'
import {  useUser } from 'reactfire';
import Denuncias from '../Denuncias'

const SectionDenuncia = ({state}) => {
    const user = useUser();
    const [complaints, setcomplaints] = useState({});
    const [complaintsUser, setcomplaintsUser] = useState({});

    const getComplaints = async () => {
        const res = await complaintHttpClient.getAll();
        setcomplaints(res.data);
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


