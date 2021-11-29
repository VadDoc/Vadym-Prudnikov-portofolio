import styles from './Projects.module.scss'
import {Title} from "../../common/Title/Title";
import {projects} from "../../../assets/content/content"

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <Title text={projects.titleText}/>
      <div className={styles.container}>
        <ul className={styles.wrapper}>
          {projects.myProjects.map(pr => (
            <li className={styles.project} key={pr.id}>
              <figure style={{backgroundImage: `url(${pr.img})`}}>
                <div className={styles.hoverContent}>
                  <div className={styles.projectInfo}>
                    <h3>{pr.title}</h3>
                    <p>Demo : <a href={pr.siteLink} target="_blank">{pr.siteName}</a></p>
                    <p>Sources : <a href={pr.codeLink} target="_blank">{pr.codeName}</a></p>
                    <p>Languages & technologies : <span>{pr.languages}</span></p>
                  </div>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}