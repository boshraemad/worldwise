import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useCities } from "../contexts/citiesContext";
import { formatDate } from "../utilities/formateDate";
import styles from "./City.module.css";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

export default function City() {
    const {id}=useParams();
    const {getCity , currentCity , isLoading}=useCities();

    const {cityName , emoji ,date , notes} = currentCity;
    useEffect(()=>{
      getCity(id);
    },[id])

    if (isLoading) return <Spinner/>
  return (
    <div className={styles.city}>
    <div className={styles.row}>
      <h6>City name</h6>
      <h3>
        <span>{emoji}</span> {cityName}
      </h3>
    </div>

    <div className={styles.row}>
      <h6>You went to {cityName} on</h6>
      <p>{formatDate(date || null)}</p>
    </div>

    {notes && (
      <div className={styles.row}>
        <h6>Your notes</h6>
        <p>{notes}</p>
      </div>
    )}

    <div className={styles.row}>
      <h6>Learn more</h6>
      <a
        href={`https://en.wikipedia.org/wiki/${cityName}`}
        target="_blank"
        rel="noreferrer"
      >
        Check out {cityName} on Wikipedia &rarr;
      </a>
    </div>

    <div>
      <BackButton />
    </div>
  </div>
  )
}
