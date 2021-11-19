import styles from './Projects.module.css'
import commonStyles from "../../../Common/styles/Styles.module.css";
import {Project} from "./Project/Project";

export const Projects = () => {
  const projectsData = [
    {id: '1', link: 'link1', title: 'Social network', text: 'description1'},
    {id: '2', link: 'link2', title: 'Todolist', text: 'description2'},
    {id: '3', link: 'link3', title: 'Counter', text: 'description3'},
  ]
  return (
    <div className={styles.projects}>
      <div className={`${commonStyles.mainContainer} ${styles.container}`}>
        <h1>My Projects</h1>
        <div className={styles.wrapper}>
          {projectsData.map(project => <Project key={project.id} project={project} />)}
        </div>
      </div>
    </div>
  )
}