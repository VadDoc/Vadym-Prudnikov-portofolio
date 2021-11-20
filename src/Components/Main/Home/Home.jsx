import styles from './Home.module.css'
import mainPhoto from './../../../images/vaddoc4.png'
import mainPhotoMobile from './../../../images/vaddoc4.png'
import {NavLink} from "react-router-dom";


export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.colorBlock} />

        <div className={styles.detailsContainer}>
          <div className={styles.mainPhoto} style={{backgroundImage: `url(${mainPhoto})`}}/>


          <div className={styles.homeDetails}>
            <div>
              <img className={styles.imgMobile} src={`${mainPhotoMobile}`} alt="avatar"/>
              <h1 className={styles.title}>
                I'm vadym prudnikov.
                <span>
                  react developer<br/>
                  <span>
                    javascript developer<br/>
                    frontend developer
                  </span>
                </span>
              </h1>
              <p className={styles.text}>
                I'm a Ukrainian React developer &amp; front‑end developer
                focused on crafting clean &amp; user‑friendly experiences, I
                am passionate about building excellent software that improves
                the lives of those around me.
              </p>
              <NavLink to="/about" activeClassName={styles.active}>
                <button className={styles.button}>
                  <span className={styles.buttonText}>more about me</span
                  ><span className={styles.buttonIcon}>x</span>
                </button>
              </NavLink>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}