import React, { Fragment } from 'react';
import ListOfComplaints from '../ListOfComplaints';
import {useComplaints} from '../../hooks/useComplaints';
import {useComplaintsById} from '../../hooks/useComplaintsById'

const SectionDenuncia = ({state}) => {
    const { complaints } = useComplaints();
    const {complaintsUser} = useComplaintsById();


    return (
            state===0 
                ?   <Fragment>
                        <ListOfComplaints complaints={complaints}/>
                    </Fragment>
                :   <Fragment>
                        <ListOfComplaints complaints={complaintsUser}/>
                    </Fragment>
    )
}

export default SectionDenuncia


