import { useEffect, useState } from 'react';
import UseGlobalComplaints from './UseGlobalComplaints'
import {  useUser } from 'reactfire';


export const useComplaintsById = () => {
    const complaints = UseGlobalComplaints();
    const user = useUser();
    const [complaintsUser, setcomplaintsUser] = useState({});

    useEffect(()=>{
            const newArray = complaints.filter( complaint => {
                if(complaint.USER !== null){
                   return complaint.USER.ID_U === user.uid
                }
            })
            setcomplaintsUser(newArray);
    },[complaints]);

    return { complaintsUser }
}