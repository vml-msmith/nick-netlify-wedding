import styles from './Hero.module.css'
import Image from 'next/image'


export default function FAQItem({ title, answer }) {
  return (
    <div className="faq__item">
      <div className="faq__question">
        {title}
      </div>
      <div className="faq__answer">
        {answer}
      </div>
    </div>
  )
}
