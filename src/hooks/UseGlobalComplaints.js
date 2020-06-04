import { useContext } from 'react';
import ComplaintsContext from '../context/ComplaintsContext';

const UseGlobalComplaints = () => {
    return ( useContext(ComplaintsContext).complaints);
}

export default UseGlobalComplaints;