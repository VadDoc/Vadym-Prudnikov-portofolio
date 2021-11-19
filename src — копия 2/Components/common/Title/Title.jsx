import styles from './Title.module.css'

export const Title = ({text}) => {
  return (
    <div className={styles.title}>
      <h1>{text[0]} <span>{text[1]}</span></h1>
      <span className={styles.titleBg}>{text[2]}</span>
    </div>
  )
}