import styles from "./CountryItem.module.css"

// const formatDate = (date) =>
//     new Intl.DateTimeFormat("en", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//       weekday: "long",
//     }).format(new Date(date));

export default function CountryItem({country}) {

  return (
    <li className={styles.countryItem}>
        <span>{country.countryName}</span>
        <span>{country.emoji}</span>
    </li>
    
  )
}
