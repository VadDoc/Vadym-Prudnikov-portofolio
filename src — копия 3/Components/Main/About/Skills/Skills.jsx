import styles from "./Skills.module.css";

const mySkills = [
  {name: 'React', per: 67},
  {name: 'Redux', per: 82},
  {name: 'TypeScript', per: 62},
  {name: 'JavaScript', per: 55},
  {name: 'Axios', per: 65},
  {name: 'Storybook', per: 55},
  {name: 'Unit Testing', per: 45},
  // {name: 'HTML', per: 100},
  {name: 'Material UI', per: 48},

  {name: 'AJAX', per: 68},
  {name: 'Git', per: 45},
  {name: 'JSON', per: 73},
  {name: 'NODEJS', per: 35},
  // {name: 'HTML', per: 100},
  // {name: 'CSS', per: 10},
  // {name: 'HTML', per: 100},

  {name: 'Wordpress', per: 51},
  {name: 'SASS', per: 58},
  {name: 'LESS', per: 55},
  {name: 'SCSS', per: 69},
  {name: 'Bootstrap', per: 72},
  {name: 'CSS', per: 95},
  {name: 'HTML', per: 99},


  {name: 'MySQL', per: 23},
  {name: 'Photoshop', per: 45},
  // {name: 'CSS', per: 95},
  // {name: 'HTML', per: 99},
]

export const Skills = () => {
  return (
    <div className={styles.skills}>
      <h3 className={styles.title}>My skills</h3>

      {mySkills.map(sk => (
        <div className={styles.skill} key={sk.name}>
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