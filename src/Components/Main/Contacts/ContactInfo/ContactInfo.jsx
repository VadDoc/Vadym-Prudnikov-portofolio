import styles from './ContactInfo.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelopeOpen, faMap, faPhoneSquare} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faTelegram,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons'
import {contacts} from '../../../../assets/content/content'


export const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h3 className={styles.title}>Don't be shy</h3>
      <p className={styles.text}>
        Feel free to get in touch with me. I am always open to discussing new
        projects or creative ideas.
      </p>
      <p className={styles.textContacts}>
        <FontAwesomeIcon className={styles.addressIcon} icon={faMap}/>
        <span>Address Point</span>
        {contacts.address}
      </p>
      <p className={styles.textContacts}>
        <a href={`mailto:${contacts.email}`} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className={styles.addressIcon} icon={faEnvelopeOpen}/>
        </a>
        <span>mail me</span>
        <a href={`mailto:${contacts.email}`} target="_blank" rel="noreferrer">{contacts.email}</a>
      </p>
      <p className={styles.textContacts}>
        <a href={`tel:${contacts.tel}`} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className={styles.addressIcon} icon={faPhoneSquare}/>
        </a>
        <span>call me</span>
        <a href={`tel:${contacts.tel}`} target="_blank" rel="noreferrer">{contacts.tel}</a>
      </p>
      <p className={styles.textContacts}>
        <a href={`https://telegram.me/${contacts.telegram}`} target="_blank" rel="noreferrer">
          <FontAwesomeIcon className={styles.addressIcon} icon={faTelegram}/>
        </a>
        <span>contact me</span>
        <a href={`https://telegram.me/${contacts.telegram}`} target="_blank" rel="noreferrer">{contacts.telegram}</a>
      </p>
      <ul className={styles.social}>
        <li>
          <a href={contacts.facebook} target="_blank" rel="noreferrer" title={"Facebook"}>
            <FontAwesomeIcon className={styles.socialIcon} icon={faFacebookF}/>
          </a>
        </li>
        <li>
          <a href={contacts.twitter} target="_blank" rel="noreferrer" title={"Twitter"}>
            <FontAwesomeIcon className={styles.socialIcon} icon={faTwitter}/>
          </a>
        </li>
        <li>
          <a href={contacts.instagram} target="_blank" rel="noreferrer" title={"Instagram"}>
            <FontAwesomeIcon className={styles.socialIcon} icon={faInstagram}/>
          </a>
        </li>
        <li>
          <a href={contacts.linkedin} target="_blank" rel="noreferrer" title={"LinkedinIn"}>
            <FontAwesomeIcon className={styles.socialIcon} icon={faLinkedinIn}/>
          </a>
        </li>
        <li>
          <a href={contacts.github} target="_blank" rel="noreferrer" title={"GitHub"}>
            <FontAwesomeIcon className={styles.socialIcon} icon={faGithubAlt}/>
          </a>
        </li>
      </ul>
    </div>
  )
}