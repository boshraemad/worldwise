import Spinner from "./Spinner";
import styles from "./Countries.module.css";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/citiesContext";

export default function Countries() {
    const {cities , isLoading}=useCities();
    if( isLoading) return <Spinner/>
    if (!cities.length) return null;

    const countries=cities.reduce((arr,city)=>{
      if(!arr.map((el=>el.country)).includes(city.country)) return [...arr,{countryName:city.country , emoji:city.emoji}]
      return arr;
    },[]);


    return (
        <ul className={styles.countryList}>
            {
                countries.map((country)=>
                    <CountryItem country={country} key={country.countryName}/>
                )
            }
        </ul>
    )
}

