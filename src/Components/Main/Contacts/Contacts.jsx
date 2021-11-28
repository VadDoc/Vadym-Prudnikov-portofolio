import styles from './Contacts.module.scss'
import {Title} from "../../common/Title/Title";
import {ContactInfo} from "./ContactInfo/ContactInfo";
import {Form} from "./Form/Form";
import {contacts} from "../../../assets/content/content";

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <Title text={contacts.titleText}/>
      <div className={styles.container}>
        <ContactInfo/>
        <Form/>
      </div>
    </div>
  )
}