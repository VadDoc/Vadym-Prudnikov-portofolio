import styles from './About.module.scss'
import {Skills} from "./Skills/Skills";
import {Title} from "../../common/Title/Title";
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";
import {Experience} from "./Experience/Experience";
import {about} from "../../../assets/content/content";
import {Education} from "./Experience/Education";

export const About = () => {
  return (
    <div className={styles.about}>
      <Title text={about.titleText}/>
        <div className={styles.container}>
          <PersonalInfo/>
          <Skills/>
          <Experience/>
          <Education/>
        </div>
    </div>
  )
}