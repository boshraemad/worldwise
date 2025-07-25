import styles from "./AppLayout.module.css";
import SideBar from "../Components/SideBar";
import Map from "../Components/Map";
import User from "../Components/User";
export default function AppLayout() {
  return (
    <div className={styles.app}>
        <SideBar/>
        <Map/>
        <User/>
    </div>
  )
}
