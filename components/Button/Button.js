import styles from "./Button.module.css";

const Button = ({ children, color = "primary" }) => (
  <div className={`${styles.button} ${styles[color]}`}>{children}</div>
);

export default Button;
