import React, { Fragment } from 'react';
import Denuncias from '../Denuncias';
import {useComplaints} from '../../hooks/useComplaints';
import {useComplaintsById} from '../../hooks/useComplaintsById'

const SectionDenuncia = ({state}) => {
    const { complaints } = useComplaints();
    const {complaintsUser} = useComplaintsById();

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


