import React, {useState} from 'react';
import Layout from './Layout';
import MapLayersControl from '../components/MapLayersControl';
import PopupCard from '../components/MapLayersControl/PopupCard';

const MapComplaints = () => {
    //para el popup
    const [sideDraweOpen, setsideDraweOpen] = useState({
        click: false,
        complaint: null
    });

    return (
        <Layout>
            <MapLayersControl setsideDraweOpen={setsideDraweOpen}/>
            <PopupCard sideDraweOpen={sideDraweOpen} setsideDraweOpen={setsideDraweOpen}/>
        </Layout>
    )
}

export default MapComplaints;
