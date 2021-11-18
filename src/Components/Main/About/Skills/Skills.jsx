import styles from "./Skills.module.css";

const mySkills = [
  {name: 'React', per: 20},
  {name: 'Redux', per: 80},
  {name: 'JavaScript', per: 70},
  {name: 'Wordpress', per: 50},
  {name: 'CSS', per: 10},
  {name: 'HTML', per: 100},
]

export const Skills = ({skill}) => {
  return (
    <div className={styles.skills}>
      <h3 className={styles.title}>My skills</h3>

      {mySkills.map(sk => (
        <div className={styles.skill}>
        <div className={styles.skillWrapper}>
          <span>{sk.per}%</span>
          <div className={styles.slice} style={{clip: sk.per>50 ? 'rect(auto,auto,auto,auto)': 'rect(0,1em,1em,0.5em)'}}>
            <div className={styles.bar} style={{transform: `rotate(${360*sk.per/100}deg)`}} />
            {sk.per>50 && <div className={styles.fill} />}
          </div>
        </div>
        <h6 className={styles.skillname}>{sk.name}</h6>
      </div>
        ))}

    </div>
  );
}