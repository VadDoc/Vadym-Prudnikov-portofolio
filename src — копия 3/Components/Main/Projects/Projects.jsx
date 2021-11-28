import styles from './Projects.module.css'
// import {Project} from "./Project/Project";
import {Title} from "../../common/Title/Title";

export const Projects = () => {
  // const projectsData = [
  //   {id: '1', link: 'link1', title: 'Social network', text: 'description1'},
  //   {id: '2', link: 'link2', title: 'Todolist', text: 'description2'},
  //   {id: '3', link: 'link3', title: 'Counter', text: 'description3'},
  // ]

  const titleText = ['my', 'projects', 'works']

  return (
    <div className={styles.projects}>
      {/*<div className={`${commonStyles.mainContainer} ${styles.container}`}>*/}
      <Title text={titleText}/>
      {/*<div className={styles.wrapper}>*/}
      {/*  {projectsData.map(project => <Project key={project.id} project={project}/>)}*/}
      {/*</div>*/}
      {/*</div>*/}
    </div>
  )
}