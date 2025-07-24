// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState , useEffect} from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useCities } from "../contexts/citiesContext";
import useUrlPosition from "../Hooks/useUrlPosition";
import Button from "./Button";
import Message from "./Message";
import Spinner from "./Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const Base_Url="https://api.bigdatacloud.net/data/reverse-geocode-client?";

function Form() {
  const [isLoadingGeo , setIsLoadingGeo]=useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [emoji , setEmoji]=useState("");
  const [error , setError]=useState("");
  const [notes, setNotes] = useState("");
  const {isLoading , addCity}=useCities();

  const [lat , lng]=useUrlPosition();
  const navigate=useNavigate();
  useEffect(()=>{
    if(!lat || !lng) return;
    async function fetchCity(){
      try{
        setIsLoadingGeo(true);
        const res = await fetch (`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        if(!data.countryCode) throw new Error("tap somewhere else");
        setCityName(data.city || data.locality);
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      }catch(error){
        setError(error);
      }finally{
        setIsLoadingGeo(false)
      }
    }

    fetchCity();
  },[lat , lng])

  const onSubmit=async (e)=>{
    e.preventDefault();
    const newCity={
      cityName:cityName,
      country:country,
      emoji:emoji,
      date:date,
      notes:notes,
      position:{
        lat:lat,
        lng:lng
      }
    }

    if(cityName) {
      await addCity(newCity);
      navigate("/app");
    }
  }
  // if(error) return <Message message={error}/>
  if (isLoadingGeo) return <Spinner/>
  return (
    <form className={`${styles.form}  ${isLoading ? styles.laoding : ""}`} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
       <DatePicker onChange={(date)=>{setDate(date)}} selected={date}/>
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <Button type="back" onClick={(e)=>{
            e.preventDefault();
            navigate(-1);
        }}>&larr; Back</Button>
      </div>
    </form>
  );
}

export default Form;