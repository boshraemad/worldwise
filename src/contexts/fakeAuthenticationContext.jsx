import { createContext , useContext , useReducer } from "react";

const AuthContext=createContext();

const initialState={
    user:null,
    isAuthenticated:false
}

function reducer (state , action){
    switch(action.type){
        case "login": return{user:action.payload , isAuthenticated:true}
        case "logout":return {user:null , isAuthenticated:false}

        default:throw new Error("unknow action")
    }
}
const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };

function Authenticationprovider({children}){

    const [{user , isAuthenticated} , dispatch]=useReducer(reducer , initialState);

    const login=(email , password)=>{
        if(email === FAKE_USER.email && password ===FAKE_USER.password){
            dispatch({type:"login" , payload:FAKE_USER})
        }
    }

    const logout=()=>{
        dispatch({type:"logout"})
    }
    return(
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    if(context === undefined) throw new Error("context is used outside Auth provider")
    return context;
}

export {useAuth , Authenticationprovider}