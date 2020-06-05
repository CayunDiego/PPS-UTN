import React, {useState} from 'react';
import UseGlobalComplaints from '../hooks/UseGlobalComplaints';
import Complaint from '../components/Complaint'
import Layout from './Layout';
import FormComment from '../components/FormComment';
import ListOfComment from '../components/ListOfComment';

const Detail = ({params}) => {
    const complaints = UseGlobalComplaints();
    const [newComment, setnewComment] = useState(false)
    const complaint = complaints.find( singleComplaint => singleComplaint.ID === parseInt(params.id));
    return (
        <Layout>
            <Complaint complaint={complaint}>
                <FormComment id={complaint.ID} setnewComment={setnewComment}/>
                <ListOfComment idComplaint={complaint.ID} newComment={newComment}/>
            </Complaint>
        </Layout>
    )
}

export default Detail;
