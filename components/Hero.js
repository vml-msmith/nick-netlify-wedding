import styles from './Hero.module.css'


export default function Hero({ title }) {
  return (
    <div className={styles.hero}>
      <img className={styles.hero__img} src="https://picsum.photos/800/600" alt="" />
    </div>
  )
}
