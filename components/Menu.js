import styles from "./Menu.module.css";
import Script from "next/script";


export default function Menu({ title }) {
  return (

      <div className={styles.mainnav}>

<Script type="text/javascript" src="/assets/noframework.waypoints.min.js" />
      <Script type="text/javascript" src="/assets/nav.js" />
        <div className={styles.mainnav__title}>{title}</div>

        <input
          className={styles.mainnav__sidemenu}
          type="checkbox"
          id="side-menu"
        />
        <label className={styles.mainnav__hamburger} htmlFor="side-menu">
          <span className={styles.mainnav__hamburger_line}></span>
        </label>

        <nav className={styles.mainnav__nav}>
          <ul className={styles.mainnav__menu}>
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#story" className="nav-link">
                Our Story
              </a>{" "}
            </li>
            <li>
              <a href="#photos" className="nav-link">
                Photos
              </a>
            </li>
            <li>
              <a href="#party" className="nav-link">
                Wedding Party
              </a>
            </li>
            <li>
              <a href="#day" className="nav-link">
                Wedding Day
              </a>
            </li>
            <li>
              <a href="#faq" className="nav-link">
                FAQ
              </a>
            </li>
            <li>
              <a href="#rsvp" className="nav-link">
                RSVP
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.zola.com/registry/michaelandirina2023" className="nav-link">
                Gifts
              </a>
            </li>
          </ul>
        </nav>
      </div>
  );
}
