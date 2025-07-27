import {createContext , useContext , useReducer , useEffect , useCallback} from "react";

const Base_Url="http://localhost:8000";

const CitiesContext=createContext();
const initialState={
  cities:[],
  isLoading:false,
  currentCity:{}
}
const reducer=(state , action)=>{
  switch (action.type){
    case "loading":return{...state,isLoading:true}
    case "cities/loaded":return {...state,cities:action.payload , isLoading:false}
    case 'city/loaded':return {...state,currentCity:action.payload , isLoading:false}
    case "city/created":return {...state,cities:[...state.cities ,action.payload] ,currentCity:action.payload , isLoading:false}
    case "city/deleted":return {...state,cities:state.cities.filter((city)=>city.id !==action.payload),currentCity:{} , isLoading:false}

    default : throw new Error("unknow action");
  }
}
function CitiesProvider({children}){
  const [{cities , isLoading , currentCity} , dispatch]=useReducer(reducer , initialState);

    useEffect(()=>{
      const fetchCities=async()=>{
        try{
          dispatch({type:"loading"});
          const res = await fetch(`${Base_Url}/cities`);
          const data = await res.json();
          dispatch({type:"cities/loaded" , payload:data})
        }catch{
          console.log("error");
        }
      }
  
      fetchCities();
    },[])

    const getCity=useCallback(async(id)=>{
      try{
        dispatch({type:"loading"});
        const res = await fetch(`${Base_Url}/cities/${id}`);
        const data = await res.json();
        dispatch({type:"city/loaded" , payload:data});
      }catch{
        console.log("error");
      }
    },[])

    const addCity=async(newCity)=>{
      try{
        dispatch({type:"loading"});
        const res = await fetch(`${Base_Url}/cities`,{
          method:"POST",
          body:JSON.stringify(newCity),
          header:{
            "Content-Type" :"application.json"
          }
        });
        const data = await res.json();

        dispatch({type:"city/created" , payload:data});
      }catch{
        console.log("error");
      }
    }

    const deleteCity=async(id)=>{
      try{
        dispatch({type:"loading"});
        await fetch(`${Base_Url}/cities/${id}`,{
          method:"DELETE",
        });
        dispatch({type:"city/deleted" , payload:id});
      }catch{
        console.log("error");
      }
    }
    
    return(
        <CitiesContext.Provider value={{
            cities,
            isLoading,
            currentCity,
            getCity,
            addCity,
            deleteCity
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