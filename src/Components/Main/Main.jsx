import styles from './Main.module.scss'
import {Route} from "react-router-dom";
import {Home} from "./Home/Home";
import {About} from "./About/About";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";

export const Main = () => {
  return (
      <div className={styles.main}>
        <Route path='/' render={() => <Home name="Home" />} />
        <Route path='/home' render={() => <Home name="Home" />} />
        <Route path='/about' render={() => <About name="About" />} />
        <Route path='/projects' render={() => <Projects name="Projects" />} />
        <Route path='/contacts' render={() => <Contacts name="Contacts" />} />
      </div>
  )
}