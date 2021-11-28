import styles from './Form.module.scss'
import {Title} from "../../../common/Title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {Button} from "../../../common/Button/Button";

export const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <div className={styles.wrapperInput}>
          <div className={styles.formGroup}>
            <input type={"text"} placeholder="YOUR NAME"/>
          </div>
        </div>
        <div className={styles.wrapperInput}>
          <div className={styles.formGroup}>
            <input name="email" type={"email"} placeholder="YOUR EMAIL"/>
          </div>
        </div>
        <div className={styles.wrapperInputSubj}>
          <div className={styles.formGroup}>
            <input name="subject" type="text" placeholder="YOUR SUBJECT"/>
          </div>
        </div>
        <div className={styles.wrapperTextarea}>
          <div className={styles.formGroup}>
            <textarea name="message" placeholder="YOUR MESSAGE"/>
          </div>
        </div>
          <div className={styles.wrapperButton}>
            <Button title={'Send Message'} icon={'paperPlane'}/>
            {/*<button type="submit" className="button" style="cursor: none;"><span*/}
            {/*  className="button-text">Send Message</span><span className="button-icon fa fa-send"></span></button>*/}
          </div>
      </div>
    </form>
  )
}