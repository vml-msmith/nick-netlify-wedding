import styles from './Section.module.css'

export default function Section(props) {
  return (
    <div className={styles.section} id={props.id} name={props.id}>
      <div className={styles.fullwidth}><h2>{props.title}</h2></div>
      {props.children}
    </div>
  );
}