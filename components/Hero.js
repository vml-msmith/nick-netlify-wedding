import styles from './Hero.module.css'
import Image from 'next/image'


export default function Hero({ title }) {
  return (
    <div className={styles.hero}>
      <Image
        layout='fill'
                src='/photo-header.jpg'
                alt='user profile picture'
                width={300}
                height={300}
                layout="responsive"
            />
    </div>
  )
}
