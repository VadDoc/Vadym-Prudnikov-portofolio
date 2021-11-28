import styles from "./Button.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import {faShare} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'


export const Button = ({title, icon}) => {
  let iconType
  if (icon === 'arrow') iconType = faArrowRight
  if (icon === 'download') iconType = faDownload
  if (icon === 'envelope') iconType = faEnvelope
  if (icon === 'share') iconType = faShare
  if (icon === 'paperPlane') iconType = faPaperPlane

  return (
    <button className={styles.button}>
      <span className={styles.buttonText}>{title}</span>
      <span className={styles.buttonIcon}>
        <FontAwesomeIcon icon={iconType}/>
      </span>
    </button>
  )
}