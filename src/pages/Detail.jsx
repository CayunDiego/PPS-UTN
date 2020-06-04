import React, {useState} from 'react';
import UseGlobalComplaints from '../hooks/UseGlobalComplaints';
import DenunciaBETA from '../components/DenunciaBETA';
import Layout from './Layout';
import FormComment from '../components/FormComment';
import ListOfComment from '../components/ListOfComment'

const Detail = ({params}) => {
    const complaints = UseGlobalComplaints();
    const [newComment, setnewComment] = useState(false)
    const complaint = complaints.find( singleComplaint => singleComplaint.ID === parseInt(params.id));
    return (
        <Layout>
            <DenunciaBETA complaint={complaint}>
                <FormComment id={complaint.ID} setnewComment={setnewComment}/>
                <br/>
                <ListOfComment idComplaint={complaint.ID} newComment={newComment}/>
            </DenunciaBETA>
        </Layout>
    )
}

export default Detail;
