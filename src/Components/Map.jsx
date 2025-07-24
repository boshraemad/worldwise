import { useState , useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from '../Components/Map.module.css'
import { MapContainer , TileLayer , Marker , Popup, useMap, useMapEvents } from 'react-leaflet';
import { useCities } from '../contexts/citiesContext';

export default function Map() {
    const [mapPosition , setMapPosition]=useState([30,0]);
    const [searchQuery]=useSearchParams();
    const mapLat=searchQuery.get("lat");
    const mapLng=searchQuery.get("lng");
    const {cities}=useCities();

    useEffect(()=>{
      if(mapLat && mapLng) setMapPosition([mapLat , mapLng]);
    } , [mapLat, mapLng])
  return (
    <div className={styles.mapContainer}>
    <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className={styles.map}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
  />
{
  cities.map((city)=>(
    <Marker position={[city.position.lat , city.position.lng]} key={city.id}>
    <Popup>
      <span>{city.emoji}</span><br/><span> {city.cityName}</span>
    </Popup>
  </Marker>
  ))
}
<ChangeCenter position={mapPosition}/>
<DetectClick/>
</MapContainer>
    </div>
  )
}

function ChangeCenter({position}){
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick(){
  const navigate = useNavigate();
  useMapEvents({
    click:(e)=> navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  })
}
