import styles from "./AppLayout.module.css";
import SideBar from "../Components/SideBar";
import Map from "../Components/Map";

export default function AppLayout() {
  return (
    <div className={styles.app}>
        <SideBar/>
        <Map/>
    </div>
  )
}
