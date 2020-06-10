import { useContext, useEffect } from 'react';
import ComplaintsContext from '../context/ComplaintsContext';
import complaintsJSON from '../mock/complaints.json';
import complaintHttpClient from '../services/Api/complaint.httpClient';


export const useComplaints = () => {
    const {complaints, setComplaints} = useContext(ComplaintsContext);

    useEffect(()=>{
        console.log('render complaint Hook')
        process.env.REACT_APP_MOCK_COMPLAINT === "true" 
            ? setComplaints(complaintsJSON.data)
            : complaintHttpClient.getAll()
                .then(res => {
                    setComplaints(res.data);
                })
    },[setComplaints]);

    return { complaints }
}