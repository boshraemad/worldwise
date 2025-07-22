import { BrowserRouter } from "react-router-dom"
import { Routes , Route } from "react-router-dom"
import { useEffect , useState } from "react"
import HomePage from "./Pages/HomePage"
import Product from "./Pages/Product"
import Pricing from "./Pages/Pricing"
import PageNotFound from "./Pages/PageNotFound"
import Login from "./Pages/Login"
import AppLayout from "./Pages/AppLayout"
import Cities from "./Components/Cities"
import Countries from "./Components/Countries"

const Base_Url="http://localhost:8000";

function App() {
  const [cities , setCities]=useState([]);
  const [isLoading , setIsLoading]=useState(false);

  useEffect(()=>{
    const fetchCities=async()=>{
      try{
        setIsLoading(true);
        const res = await fetch(`${Base_Url}/cities`);
        const data = await res.json();
        setCities(data);
      }catch{
        console.log("error");
      }finally{
        setIsLoading(false);
      }
    }

    fetchCities();
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/app" element={<AppLayout/>}>
          <Route index  element={<Cities cities={cities} isLoading={isLoading}/>}/>
          <Route path="cities" element={<Cities cities={cities} isLoading={isLoading}/>}/>
          <Route path="countries" element={<Countries/>}/>
        </Route>
        <Route path="/product" element={<Product/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
