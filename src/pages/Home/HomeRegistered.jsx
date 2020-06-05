import React, {useState} from 'react';
import Layout from '../Layout';
import NavTab from '../../components/NavTab'
import SectionDenuncia from '../../components/SectionDenuncia'


const HomeRegistered = () => {
    const [state, setstate] = useState(0)
    return ( 
            <Layout header={<NavTab setstate={setstate} state={state}/>}>
                <SectionDenuncia state={state}/>
            </Layout>
     );
}

export default HomeRegistered;