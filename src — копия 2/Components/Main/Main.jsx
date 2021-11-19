import styles from './Main.module.css'
import {Redirect, Route} from "react-router-dom";
import {HomePage} from "./HomePage/HomePage";
import {About} from "./About/About";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";

export const Main = () => {
  return (
      <div className={styles.main}>
        <Route path='/home' render={() => <HomePage name="Home" />} />
        <Route path='/about' render={() => <About name="About" />} />
        <Route path='/projects' render={() => <Projects name="Projects" />} />
        <Route path='/contacts' render={() => <Contacts name="Contacts" />} />
        <Redirect from='/' to='/home' />
      </div>

  )
}