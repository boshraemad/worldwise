import { useState } from 'react';
import styles from '../Components/Map.module.css'
import { MapContainer , TileLayer , Marker , Popup } from 'react-leaflet';
import { useCities } from '../contexts/citiesContext';

export default function Map() {
    const [mapPosition , setMapPosition]=useState([30,0]);
    const {cities}=useCities();
  return (
    <div className={styles.mapContainer}>
    <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className={styles.map}>
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
</MapContainer>
    </div>
  )
}
