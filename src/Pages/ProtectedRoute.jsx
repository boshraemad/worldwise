import { useEffect } from "react"
import { useAuth } from "../contexts/fakeAuthenticationContext"
import { useNavigate } from "react-router-dom"

export default function ProtectedRoute({children}) {
    const navigate=useNavigate();
    const {isAuthenticated}=useAuth();

    useEffect(()=>{
        if(! isAuthenticated) navigate("/");
    }, [isAuthenticated , navigate])

  return (
    isAuthenticated ? children : null
  )
}
