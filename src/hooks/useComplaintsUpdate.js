import { useContext, useEffect, useState } from 'react';
import ComplaintsContext from '../context/ComplaintsContext';


export const useComplaintsUpdate = () => {
    const {complaints, setComplaints} = useContext(ComplaintsContext);
    const [click, setClick] = useState(null)

    useEffect(()=>{
        if(click !== null){
            const newArray = complaints.filter( complaint => complaint.ID !== click )
            setComplaints(newArray);
        }
    },[click]);

    return { setClick }
}