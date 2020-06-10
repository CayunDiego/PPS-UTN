import React, {useState, useEffect} from 'react';
import UseGlobalComplaints from '../hooks/UseGlobalComplaints';
import Complaint from '../components/Complaint'
import Layout from './Layout';
import FormComment from '../components/FormComment';
import ListOfComment from '../components/ListOfComment';
import complaintHttpClient from '../services/Api/complaint.httpClient';

const Detail = ({params}) => {
    const complaints = UseGlobalComplaints();
    const [newComment, setnewComment] = useState(false);
    const [complaint, setcomplaint] = useState(complaints.find( singleComplaint => singleComplaint.ID === parseInt(params.id)));


    useEffect(()=>{
        //por si actualizamos y perdemos el context global
        if(complaints.length === 0){
            //aca buscamos la denuncia por id
            complaintHttpClient.getId(params.id)
                .then(singleComplaint => setcomplaint(singleComplaint.data))
        }
    },[]);
    

    return (
        <Layout>
            {
                complaint &&
                    <Complaint complaint={complaint}>
                        <FormComment id={complaint.ID} setnewComment={setnewComment}/>
                        <ListOfComment idComplaint={complaint.ID} newComment={newComment}/>
                    </Complaint>
            }
        </Layout>
    )
}

export default Detail;
