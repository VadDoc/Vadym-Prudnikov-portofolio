import styles from './Personalinfo.module.scss'
import mainPhotoMobile from "../../../../assets/images/mainPhotoMobile.png";
import {Link} from "react-router-dom";
import {Button} from "../../../common/Button/Button";
import {about} from "../../../../assets/content/content"
import portfolio from "../../../../assets/portfolio/Prudnikov Vadym CV Front-end_React_JS.pdf"

export const PersonalInfo = () => {
  return (
    <div className={styles.personalInfo}>
      <h3 className={styles.title}>personal infos</h3>
      <div className={styles.avatar}>
        <img className={styles.imgMobile} src={`${mainPhotoMobile}`} alt="avatar"/>
      </div>
      <div className={styles.container}>
        <ul className={styles.infoItems}>
          {about.infoItemsList.map(i => (
            <li key={i.id}><span className={styles.itemTitle}>{i.title}</span>
              <span className={styles.itemValue}>{i.value[0]}<br/>{i.value[1]}</span>
            </li>
          ))}
        </ul>
      </div>
      {/*<NavLink to="/about" activeClassName={styles.active}>*/}
      <div className={styles.button}>
        <Link to={portfolio} target="_blank" download>
          <Button title={'Download CV'} icon={'download'}/>
        </Link>
      </div>
      {/*</NavLink>*/}
    </div>
  )
}