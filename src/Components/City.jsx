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

    //adding the getCity function causes infinite loop 
    //why?
    //using the getCity re-renders the citiesContext so it re-creates the getCity then it re-use the getCity function in the useEffect
    //how to solve ?
    //use getCity function in useCallBack in the cities context

    //this effect runs when id changes or the getCity is re-created and this happens when the cities context is re-rendered
    useEffect(()=>{
      getCity(id);
    },[id , getCity])

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
