import styles from './Home.module.css'
import commonStyles from '../../../Common/styles/Styles.module.css'


export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={`${commonStyles.mainContainer} ${styles.container}`}>
        <div className={styles.text}>
          <span>Hi There</span>
          <h1>I am Vadym Prudnikov</h1>
          <p>Frontend developer</p>
        </div>
        <div className={styles.photo}>photo</div>
      </div>
    </div>
  )
}