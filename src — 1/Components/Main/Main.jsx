import styles from './Main.module.css'
import {Redirect, Route} from "react-router-dom";
import {Home} from "./Home/Home";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";

export const Main = () => {
  return (
      <div className={styles.main}>
        <Route path='/home' render={() => <Home name="Nick" />} />
        <Route path='/skills' render={() => <Skills name="Skills" />} />
        <Route path='/projects' render={() => <Projects name="Projects" />} />
        <Route path='/contacts' render={() => <Contacts name="Contacts" />} />
        <Redirect from='/' to='/home' />
      </div>

  )
}