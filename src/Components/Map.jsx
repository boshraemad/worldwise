import styles from '../Components/Map.module.css'
import { useSearchParams } from 'react-router-dom';

export default function Map() {
    const [serchParams , setSearchParams]=useSearchParams();
  return (
    <div className={styles.mapContainer}>
        <h1>{serchParams}</h1>
        <button onClick={()=>{setSearchParams({lat:25 , lng:30})}}>change position</button>
    </div>
  )
}
