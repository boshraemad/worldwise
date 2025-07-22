import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

export default function CityItem({city}) {
const {cityName , emoji , date , id , position} = city;

  return (
    <li>
       <Link className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <p className={styles.name}>{cityName}</p>
            <span className={styles.emoji}>{emoji}</span>
            <time className={styles.date}>{formatDate(date)}</time>
            <button className={styles.deleteBtn}>X</button>
       </Link>
    </li>
    
  )
}
