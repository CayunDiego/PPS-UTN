import React, {useState, useEffect, useRef} from 'react'
import {Map, Marker, Popup, TileLayer, LayersControl, Circle, LayerGroup} from 'react-leaflet';
import { Icon } from 'leaflet';
import complaintHttpClient from '../../services/Api/complaint.httpClient';
import UseGlobalComplaints from '../../hooks/UseGlobalComplaints';

const {BaseLayer} = LayersControl;

const icon = new Icon({
  iconUrl: '/assets/iconoMapa.svg',
  iconSize: [50,50],
  // iconAnchor: [70, 30],
  // popupAnchor: [-22, -15],
  popupAnchor: [-2, -35],
});

const MapLayersControl = ({setsideDraweOpen}) => {
    const [location, setLocation] = useState( {latlng: {
                                                        lat: -31.4135000,
                                                        lng: -64.1810500
                                                    }});
    const [hasLocation, sethasLocation] = useState(false);
    const [marker, setmarker] = useState(null);
    const [zoom, setzoom] = useState(14);
    const [complaints, setcomplaints] = useState([]);


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
        // setzoom(17);
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

    //pines
    const showComplaints = () => {
          return  complaints.map(complaint => {
             return <Marker key={complaint.ID} position={[complaint.LAT, complaint.LNG]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                  <button onClick={() => handdlePopup(complaint)}>Ver mas</button>
                </Popup>
              </Marker>
            
            })
    }

    const handdlePopup = complaint => {
      setsideDraweOpen({ click: true,
                        complaint: complaint
                      })
    }

    const showComplaintsByState = estado => { 
      const complaintsGlobal = UseGlobalComplaints();
      const complaintsByState = complaintsGlobal.filter( complaint => complaint.STATE === estado);
      return  complaintsByState.map(complaint => {
        return <Marker key={complaint.ID} position={[complaint.LAT, complaint.LNG]}>
           <Popup>
             A pretty CSS3 popup. <br /> Easily customizable.
             <button onClick={() => handdlePopup(complaint)}>Ver mas</button>
           </Popup>
         </Marker>
       })
    }

    useEffect(()=>{
        if(hasLocation){
            setmarker(<Marker 
                        draggable
                        position={location.latlng}
                        icon={icon}
                        onDragend={updatePosition}
                        ref={refmarker}>
                        <Circle center={location.latlng} fillColor="blue" radius={1350} />
                        <Circle
                          center={location.latlng}
                          fillColor="red"
                          radius={200}
                          stroke={false}
                        />
                    </Marker>)
            //TRAEMOS LAS DENUNCIAS SEGUN LA UBICACION
            complaintHttpClient.getLocation(location.latlng.lat,location.latlng.lng)
            .then(res  => {
              setcomplaints(res.data);
            });
        }
    },[hasLocation,location]); 

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
        <LayersControl position="topright" >
          <BaseLayer checked name="Por Ubicación" >
              <LayerGroup>
                  {marker}
                  {showComplaints()}
                </LayerGroup>  
          </BaseLayer>
          <BaseLayer name="Publicadas" >
                <LayerGroup>
                  {showComplaintsByState('Publicada')}
                </LayerGroup>  
          </BaseLayer>
          <BaseLayer name="Rechazadas">
                <LayerGroup>
                  {showComplaintsByState('Rechazada')}
                </LayerGroup>  
          </BaseLayer>
          <BaseLayer name="En Ejecución">
                <LayerGroup>
                {showComplaintsByState('Ejecucion')}
                </LayerGroup>  
          </BaseLayer>
          <BaseLayer name="Finalizadas">
                <LayerGroup>
                {showComplaintsByState('Finalizada')}
                </LayerGroup>  
          </BaseLayer>
        </LayersControl>
      </Map>
    )
}

export default MapLayersControl;