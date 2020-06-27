import { useContext, useEffect } from 'react';
import ComplaintsContext from '../context/ComplaintsContext';
import complaintsJSON from '../mock/complaints.json';
import complaintHttpClient from '../services/Api/complaint.httpClient';
import { addSessionStorage, addSessionStorageComment } from '../helpers/sessionStorage';
import {  useUser } from 'reactfire';

export const useComplaints = () => {
    const {complaints, setComplaints} = useContext(ComplaintsContext);
    const user = useUser();

    useEffect(()=>{
        console.log('render complaint Hook')
        process.env.REACT_APP_MOCK_COMPLAINT === "true" 
            ? setComplaints(complaintsJSON.data)
            : complaintHttpClient.getAll()
                .then(async res => {
                    await addSessionStorage(user);
                    await addSessionStorageComment(user);
                    setComplaints(res.data);
                })
    },[setComplaints, addSessionStorage]);
    return { complaints }
}