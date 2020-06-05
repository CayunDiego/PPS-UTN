import React, {useState, useEffect, useRef} from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import { Icon } from 'leaflet';

const icon = new Icon({
    iconUrl: '/assets/iconoMapa.svg',
    iconSize: [100,100],
    // iconAnchor: [70, 30],
    // popupAnchor: [-22, -15],
    popupAnchor: [-2, -35],
});

const MapEvent = ({handleChangeLocation}) => {
    const [location, setLocation] = useState( {latlng: {
                                                        lat: -31.4135000,
                                                        lng: -64.1810500
                                                    }});
    const [address, setAdress] = useState('Searching for the address...');
    const [hasLocation, sethasLocation] = useState(false);
    const [marker, setmarker] = useState(null);
    const [zoom, setzoom] = useState(13);

    const mapRef = useRef();
    const refmarker = useRef();

    //cuando carga el mapa, nos pone en cordoba
    const handleClick = () => {
        const map = mapRef.current;
        if (map !== null) {
            map.leafletElement.locate();
        }
    }

    //al hacer click, nos geolocaliza donde estamos 
    const handleLocationFound = e => {
        sethasLocation(true);
        setzoom(17);
        setLocation({latlng: {
                        lat: e.latlng.lat,
                        lng: e.latlng.lng
                    }});
    }

    //cuando movemos el marker nos cambia las coordenadas.
    const updatePosition = () => {
        const marker = refmarker.current
        if (marker != null) {
            const newCoordenadas = marker.leafletElement.getLatLng();
            setLocation({latlng: {
                            lat: newCoordenadas.lat,
                            lng: newCoordenadas.lng
                        }});
        }
    }

    const getDireccion = async location => {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${location.latlng.lat}&lon=${location.latlng.lng}`);
        const data = await res.json();
        // console.log(data.features[0]);
        const addressData = data.features[0].properties.address;
        const displayAddress = `${addressData.amenity ? `${addressData.amenity},`:`${addressData.road}`} ${addressData.house_number ? `${addressData.house_number},` : ''} ${addressData.suburb}, ${addressData.city}`;
        setAdress(displayAddress);
    }

    useEffect(()=>{
        getDireccion(location)
        if(hasLocation){
            setmarker(<Marker 
                        draggable
                        position={location.latlng}
                        icon={icon}
                        onDragend={updatePosition}
                        ref={refmarker}>
                        >
                        <Popup>
                            <h1>Estoy acá</h1>
                            <h3>
                                {address}
                            </h3>
                            <p>log: {location.latlng.lat}</p>
                            <p>log: {location.latlng.lng}</p>
                        </Popup>
                    </Marker>)
                  
        }
        handleChangeLocation(location, address);
    },[hasLocation,location,handleChangeLocation, address]); 

    return (
            <Map
                center={location.latlng}
                length={4}
                onClick={handleClick}
                onLocationfound={handleLocationFound}
                ref={mapRef}
                zoom={zoom}>
                <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {marker}
            </Map>
    )
}

export default MapEvent
