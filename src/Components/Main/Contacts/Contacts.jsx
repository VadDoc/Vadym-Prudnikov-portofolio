import styles from './Contacts.module.css'
import commonStyles from "../../../Common/styles/Styles.module.css";
import {Title} from "../../common/Title/Title";

const titleText = ['get in', 'touch', 'contacts']

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <Title text={titleText}/>
      {/*<div className={`${commonStyles.mainContainer} ${styles.container}`}>*/}
      {/*  <h3>Contacts</h3>*/}
      {/*  <div>Contact 1</div>*/}
      {/*  <div>Contact 2</div>*/}
      {/*  <div>Contact 3</div>*/}
      {/*  <div>Contact 4</div>*/}
      {/*</div>*/}
    </div>
  )
}