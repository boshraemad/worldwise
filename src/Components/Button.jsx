import styles from "./Button.module.css";

export default function Button({onClick , type , children}) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>{children}</button>
  )
}
