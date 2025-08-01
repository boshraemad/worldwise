import styles from "./Login.module.css";
import {useState , useEffect} from 'react';
import { useAuth } from "../contexts/fakeAuthenticationContext";
import PageNav from "../Components/PageNav";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const {isAuthenticated , login}=useAuth();
  const navigate=useNavigate();

  useEffect(()=>{
    if(isAuthenticated) navigate("/app" , { replace:true} );
  })

  const onSubmit=(e)=>{
    e.preventDefault();
    login(email,password);
  }
  return (
    <main className={styles.login}>
      <PageNav/>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}