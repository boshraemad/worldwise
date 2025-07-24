import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { formatDate } from "../utilities/formateDate";
import { useCities } from "../contexts/citiesContext";

export default function CityItem({city}) {
const {cityName , emoji , date , id , position} = city;
const {currentCity , deleteCity}=useCities();

const handleClick=(e)=>{
  e.preventDefault();
  deleteCity(id)
}
  return (
    <li>
       <Link className={`${styles.cityItem} ${currentCity.id === id ? styles["cityItem--active"] : ""}`} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <p className={styles.name}>{cityName}</p>
            <span className={styles.emoji}>{emoji}</span>
            <time className={styles.date}>{formatDate(date)}</time>
            <button className={styles.deleteBtn} onClick={(e)=>{handleClick(e)}}>X</button>
       </Link>
    </li>
    
  )
}
