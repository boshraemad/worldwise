import styles from "../Components/SideBar.module.css";
import AppNav from "../Components/AppNav";
import Logo from "./Logo";
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>
        <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  )
}
