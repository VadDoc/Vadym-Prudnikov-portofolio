import styles from "./Project.module.css";

export const Project = ({project}) => {
  return <div className={styles.project}>
    <div><button>Look</button></div>
    <h3>{project.title}</h3>
    <p>{project.text}</p>
  </div>;
}