import styles from './About.module.css'
import {Skills} from "./Skills/Skills";
import {Title} from "../../common/Title/Title";
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";
import {Experience} from "./Experience/Experience";

export const About = () => {
  const titleText = ['about', 'me', 'resume']

  return (
    <div className={styles.about}>
      <Title text={titleText}/>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <PersonalInfo/>
          <Skills/>
          <Experience/>
        </div>
      </div>
    </div>
  )
}