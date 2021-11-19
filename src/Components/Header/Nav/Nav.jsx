import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const Nav = () => {
  return (
    <>
        <ul className={styles.nav}>
          <NavLink to="/home" activeClassName={styles.active}>
          <li className={styles.navItem}>
            <i className={styles.logoHome} />
            <h2>Home</h2>
          </li>
          </NavLink>
          <NavLink to="/about" activeClassName={styles.active}>
            <li className={styles.navItem}>
              <i className={styles.logoHome} />
              <h2>About</h2>
            </li>
          </NavLink>
          <NavLink to="/projects" activeClassName={styles.active}>
            <li className={styles.navItem}>
              <i className={styles.logoHome} />
              <h2>Projects</h2>
            </li>
          </NavLink>
          <NavLink to="/contacts" activeClassName={styles.active}>
            <li className={styles.navItem}>
              <i className={styles.logoHome} />
              <h2>Contacts</h2>
            </li>
          </NavLink>
        </ul>

    </>
  )
}