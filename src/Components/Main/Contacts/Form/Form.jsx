import styles from './Form.module.scss'
import {Button} from "../../../common/Button/Button";
import emailjs from 'emailjs-com';
import {useRef, useState} from "react";

export const Form = () => {
  const form = useRef();

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputSubject, setInputSubject] = useState('');
  const [textarea, setTextarea] = useState('');
  const [successSend, setSuccessSend] = useState(false);
  const [error, setError] = useState(false);

  const onChangeName = (e) => setInputName(e.currentTarget.value)
  const onChangeEmail = (e) => setInputEmail(e.currentTarget.value)
  const onChangeSubject = (e) => setInputSubject(e.currentTarget.value)
  const onChangeTextarea = (e) => setTextarea(e.currentTarget.value)

  const sendEmail = (e) => {
    // if(!successSend) {
      e.preventDefault();
    // }

    emailjs.sendForm('service_ixcyc79', 'template_vav15eg', form.current, 'user_vQU4N1TloGsqZkKCIV4Kg')
      .then((result) => setSuccessSend(true))
      .catch(error => setError(true))
      .finally(() => {
        setInputName('')
        setInputEmail('')
        setInputSubject('')
        setTextarea('')
      });
  };

  return (
    <form ref={form} className={styles.form} onSubmit={sendEmail}>
      <div className={styles.container}>
        <div className={styles.wrapperInput}>
          <div className={styles.formGroup}>
            <input name="user_name" type={"text"} placeholder="YOUR NAME" value={inputName} onChange={onChangeName} required={true}/>
          </div>
        </div>
        <div className={styles.wrapperInput}>
          <div className={styles.formGroup}>
            <input name="user_email" type={"email"} placeholder="YOUR EMAIL" value={inputEmail} onChange={onChangeEmail} required={true}/>
          </div>
        </div>
        <div className={styles.wrapperInputSubj}>
          <div className={styles.formGroup}>
            <input name="user_subject" type="text" placeholder="YOUR SUBJECT" value={inputSubject} onChange={onChangeSubject}/>
          </div>
        </div>
        <div className={styles.wrapperTextarea}>
          <div className={styles.formGroup}>
            <textarea name="message" placeholder="YOUR MESSAGE" value={textarea} onChange={onChangeTextarea} required={true}/>
          </div>
        </div>
          <div className={styles.wrapperButton}>
            <Button value="Send" type="submit" title={'Send Message'} icon={'paperPlane'} successSend={successSend}/>
          </div>
      </div>
      {error && <div className={styles.error}>Error! Your message has not been sent, please try again.</div>}
    </form>
  )
}