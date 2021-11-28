import styles from './Home.module.scss'
import mainPhoto from '../../../assets/images/vaddoc4.png'
import mainPhotoMobile from '../../../assets/images/mainPhotoMobile.png'
import {NavLink} from "react-router-dom";
import {Button} from "../../common/Button/Button";
import {home} from "../../../assets/content/content"

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.colorBlock}/>
        <div className={styles.detailsContainer}>
          <div className={styles.mainPhoto} style={{backgroundImage: `url(${mainPhoto})`}}/>
          <div className={styles.homeDetails}>
            <div>
              <img className={styles.imgMobile} src={`${mainPhotoMobile}`} alt="avatar"/>
              <h1 className={styles.title}>{home.title[0]}
                <span>{home.title[1]}<br/><span>{home.title[2]}<br/>{home.title[3]}</span></span>
              </h1>
              <p className={styles.text}>{home.text[0]}</p>
              <p className={styles.text}>{home.text[1]}</p>
              <NavLink to="/about">
                <Button title={'more about me'} icon={'paperPlane'}/>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

