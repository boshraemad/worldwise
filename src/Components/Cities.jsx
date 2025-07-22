import Spinner from "./Spinner";
import styles from "./Cities.module.css";
import CityItem from "./CityItem";

export default function Cities({cities , isLoading}) {
    if( isLoading) return <Spinner/>
    if (!cities.length) return null;
    return (
        <ul className={styles.cityList}>
            {
                cities.map((city)=>
                    <CityItem city={city} key={city.id}/>
                )
            }
        </ul>
    )
}
