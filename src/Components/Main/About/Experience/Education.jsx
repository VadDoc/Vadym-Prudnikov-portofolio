import styles from "./Experience.module.scss";
import {about} from "../../../../assets/content/content"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export const Education = () => {
  return (
    <div className={styles.experiences}>
      <h3 className={styles.title}>Education</h3>
      <ul className={styles.experiencesWrapper}>
        {about.myEducation.map(ed => (
          <li className={styles.experience} key={ed.id}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon className={styles.icon} icon={faPen}/>
                </div>
                <span className={styles.time}>{ed.time}</span>
                <h5 className={styles.position}>
                  {ed.position}
                  <span className={styles.place}>{ed.place}</span>
                </h5>
                <p className={styles.text}>{ed.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}