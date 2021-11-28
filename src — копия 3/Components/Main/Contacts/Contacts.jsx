import styles from './Contacts.module.scss'
import {Title} from "../../common/Title/Title";
import {ContactInfo} from "./ContactInfo/ContactInfo";
import {Form} from "./Form/Form";

const titleText = ['get in', 'touch', 'contacts']

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <Title text={titleText}/>
      <div className={styles.container}>
        <ContactInfo/>
        <Form/>
      </div>

    </div>
  )
}