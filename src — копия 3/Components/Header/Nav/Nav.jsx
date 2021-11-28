import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

export const Nav = () => {
  return (
    <>
        <ul className={styles.nav}>
          <NavLink to="/home" activeClassName={styles.active}>
          <li className={styles.navItem}>
            <FontAwesomeIcon className={styles.icon} icon={faHome}/>
            <h2>Home</h2>
          </li>
          </NavLink>
          <NavLink to="/about" activeClassName={styles.active}>
            <li className={styles.navItem}>
              <FontAwesomeIcon className={styles.icon} icon={faUser}/>
              <h2>About</h2>
            </li>
          </NavLink>
          <NavLink to="/projects" activeClassName={styles.active}>
            <li className={styles.navItem}>
              <FontAwesomeIcon className={styles.icon} icon={faBriefcase}/>
              <h2>Projects</h2>
            </li>
          </NavLink>
          <NavLink to="/contacts" activeClassName={styles.active}>
            <li className={styles.navItem}>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelopeOpen}/>
              <h2>Contacts</h2>
            </li>
          </NavLink>
        </ul>

    </>
  )
}