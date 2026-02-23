import styles from "./InnerContainer.module.css";
export default function ({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
