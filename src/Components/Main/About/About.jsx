import styles from './About.module.css'
import commonStyles from "../../../Common/styles/Styles.module.css";
import {Skills} from "./Skills/Skills";
import {Title} from "../../common/Title/Title";
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";

export const About = () => {
  const skills = [
    {id: '1', logo: 'logo', title: 'CSS', text: 'description1'},
    {id: '2', logo: 'logo', title: 'JS', text: 'description2'},
    {id: '3', logo: 'logo', title: 'React', text: 'description3'},
  ]

  const titleText = ['about', 'me', 'resume']

  return (
    <div className={styles.about}>
      <Title text={titleText}/>

      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <PersonalInfo/>
          <Skills/>


        </div>
      </div>

      {/*<div className={`${commonStyles.mainContainer} ${styles.container}`}>*/}
      {/*  <h1>My Skills</h1>*/}
      {/*  <div className={styles.wrapper}>*/}
      {/*    {skills.map(skill => <Skill key={skill.id} skill={skill}/>)}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}