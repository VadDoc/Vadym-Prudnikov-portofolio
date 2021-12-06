import styles from "./Skills.module.scss";
import {about} from "../../../../assets/content/content";

export const Skills = () => {
  return (
    <div className={styles.skills}>
      <h3 className={styles.title}>My skills</h3>
      <div className={styles.allSkills}>
        <p>I use in my practice following languages, skills and technologies: <span>{about.allSkills}</span></p>
        <p>My next goals are to improve in React and related technologies, as well as deep learning Angular. Working hard to improve my English.</p>
        <p>In the future I see myself as a Full Stack Developer.</p>
        </div>

      {about.mySkills.map(sk => (
        <div className={styles.skill} key={sk.id}>
          <div className={styles.skillWrapper}>
            <span>{sk.per}%</span>
            <div className={styles.slice}
                 style={{clip: sk.per > 50 ? 'rect(auto,auto,auto,auto)' : 'rect(0,1em,1em,0.5em)'}}>
              <div className={styles.bar} style={{transform: `rotate(${360 * sk.per / 100}deg)`}}/>
              {sk.per > 50 && <div className={styles.fill}/>}
            </div>
          </div>
          <h6 className={styles.skillname}>{sk.name}</h6>
        </div>
      ))}

    </div>
  );
}