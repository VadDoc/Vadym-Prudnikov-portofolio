import styles from "./Experience.module.scss";
import {about} from "../../../../assets/content/content"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

export const Experience = () => {
  return (
    <div className={styles.experiences}>
      <h3 className={styles.title}>Experience & education</h3>
      <ul className={styles.experiencesWrapper}>
        {about.myExperiences.map(exp => (
          <li className={styles.experience} key={exp.id}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon className={styles.icon} icon={faBriefcase}/>
                </div>
                <span className={styles.time}>{exp.time}</span>
                <h5 className={styles.position}>
                  {exp.position}
                  <span className={styles.place}>{exp.place}</span>
                </h5>
                <p className={styles.text}>{exp.text}</p>


          </li>
        ))}
      </ul>


    </div>
  );
}