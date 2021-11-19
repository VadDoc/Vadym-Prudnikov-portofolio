import styles from './Personalinfo.module.css'
import mainPhotoMobile from "../../../../images/mainPhotoMobile.jpeg";

const infoItemsList = [
  {title: 'First Name: ', value: 'Prudnikov'},
  {title: 'Last name: ', value: 'Vadym'},
  {title: 'Age: ', value: '54'},
  {title: 'Nationality: ', value: 'Ukrainian'},
  {title: 'Freelance: ', value: 'Available'},
  {title: 'Address: ', value: 'Kyiv, Ukraine'},
  {title: 'Phone: ', value: '+77777777777'},
  {title: 'Email: ', value: <a href="mailto:vadprudnikov@gmail.com">vadprudnikov@gmail.com</a>},
  {title: 'Skype: ', value: <a href="mailto:vaddoc@live.com">vaddoc@live.com</a>},
  {title: 'Languages: ', value: 'Russian, Ukrainian, English'},
]

export const PersonalInfo = () => {
  return (
    <div className={styles.personalInfo}>
      <div className={styles.title}>
        <h3>personal infos</h3>
      </div>
      <div className={styles.avatar}>
        <img className={styles.imgMobile} src={`${mainPhotoMobile}`} alt="avatar"/>
      </div>
        <div className={styles.container}>
          <ul className={styles.infoItems}>
            {infoItemsList.map(i => (
              <li><span className={styles.itemTitle}>{i.title}</span>
                <span className={styles.itemValue}>{i.value}</span>
              </li>
            ))}
          </ul>
        </div>
      {/*  <div className="col-12 mt-1"><a className="button" href="img/cv.webp" download="" style="cursor: none;"><span*/}
      {/*    className="button-text">Download CV</span><span className="button-icon fa fa-download"></span></a></div>*/}
    </div>
  )
}