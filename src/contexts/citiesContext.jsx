import {createContext , useContext , useState , useEffect} from "react";

const Base_Url="http://localhost:8000";

const CitiesContext=createContext();

function CitiesProvider({children}){
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
    return(
        <CitiesContext.Provider value={{
            cities,
            isLoading
        }}>
            {children}
        </CitiesContext.Provider>
    )
}

function useCities(){
    const context = useContext(CitiesContext);
    if(context === undefined) throw new Error("the context is used outside the provider");
    
    return context;
}
export {CitiesProvider , useCities} 