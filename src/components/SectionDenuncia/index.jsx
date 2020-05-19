import React, { Fragment } from 'react';

import Denuncias from '../Denuncias'

const SectionDenuncia = ({state}) => {
    return (
            state===0 
                ?   <Fragment>
                        <h1>DENUNCIAS</h1>
                        <Denuncias/>
                    </Fragment>
                :   <Fragment>
                        <h1>MIS DENUNCIAS</h1>
                        <Denuncias/>
                    </Fragment>
    )
}

export default SectionDenuncia


