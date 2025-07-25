import { useAuth } from "../contexts/fakeAuthenticationContext";
import { useNavigate } from "react-router-dom";
import styles from "./User.module.css"
export default function User() {
    const {user , logout}=useAuth();
    const navigate=useNavigate();
    const handleClick=()=>{
        logout();
        navigate("/");
    }
    return (
        <div className={styles.user}>
          <img src={user.avatar} alt={user.name} />
          <span>Welcome, {user.name}</span>
          <button onClick={handleClick}>Logout</button>
        </div>
      );

}
