import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom";

export default function City() {
    const [serchParams , setSearchParams]=useSearchParams();
    const {id}=useParams();
  return (
    <div>
    <h1>City{id}</h1>
    <p>{serchParams}</p>
    </div>
  )
}
