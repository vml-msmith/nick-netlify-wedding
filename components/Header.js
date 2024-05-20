import styles from './Header.module.css'


export default function Header({ title }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>{title}</h1>
      <div className={styles.header__date}>
        <div>August 10, 2024 &#x2022; Kansas City, KS</div>
      </div>
    </div>
  )
}
