import styles from './Menu.module.css'

export default function Menu({ title }) {
  return (
    <div className={styles.mainnav}>
      <div className={styles.mainnav__title}>{title}</div>

      <input className={styles.mainnav__sidemenu} type="checkbox" id="side-menu"/>
      <label className={styles.mainnav__hamburger} htmlFor="side-menu"><span className={styles.mainnav__hamburger_line}></span></label>

      <nav className={styles.mainnav__nav}>
          <ul className={styles.mainnav__menu}>
              <li><a href="#">Home</a></li>
              <li><a href="#story">Our Story</a> </li>
              <li><a href="#photos">Photos</a></li>
              <li><a href="#party">Wedding Party</a></li>
              <li><a href="#day">Wedding Day</a></li>
              <li><a href="#rsvp">RSVP</a></li>
              <li><a href="#registry">Registry</a></li>
          </ul>
      </nav>
    </div>
  )
}
