import styles from './Skills.module.css'
import commonStyles from "../../../Common/styles/Styles.module.css";
import {Skill} from "./Skill/Skill";

export const Skills = () => {
  const skills = [
    {id: '1', logo: 'logo', title: 'CSS', text: 'description1'},
    {id: '2', logo: 'logo', title: 'JS', text: 'description2'},
    {id: '3', logo: 'logo', title: 'React', text: 'description3'},
  ]
  return (
    <div className={styles.skills}>
      <div className={`${commonStyles.mainContainer} ${styles.container}`}>
        <h1>My Skills</h1>
        <div className={styles.wrapper}>
          {skills.map(skill => <Skill key={skill.id} skill={skill} />)}
        </div>
      </div>
    </div>
  )
}