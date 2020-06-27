import { Icon } from 'leaflet';

const icon = new Icon({
    iconUrl: '/assets/iconoMapa.svg',
    iconSize: [80,80],
    iconAnchor: [20, 58],
    popupAnchor: [18, -45],
  });
  
  const iconEjecucion = new Icon({
    iconUrl: '/assets/marker-Ejecucion.svg',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [37, 61],
    iconAnchor: [18, 51],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  const iconFinalizada = new Icon({
    iconUrl: '/assets/marker-Finalizada.svg',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [37, 61],
    iconAnchor: [18, 51],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  const iconPublicada = new Icon({
    iconUrl: '/assets/marker-Publicada.svg',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [37, 61],
    iconAnchor: [18, 51],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  const iconRechazada = new Icon({
    iconUrl: '/assets/marker-Rechazada.svg',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [37, 61],
    iconAnchor: [18, 51],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  
  const iconVariant = state => {
    if(state === 'Publicada'){
      return iconPublicada;
    }
    if(state === 'Finalizada'){
      return iconFinalizada;
    }
    if(state === 'Rechazada'){
      return iconRechazada;
    }
    if(state === 'Ejecucion'){
      return iconEjecucion;
    }
  }

  export default {
    icon,
    iconVariant
  }