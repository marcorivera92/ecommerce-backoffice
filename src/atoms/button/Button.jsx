import styles from "./styles.module.scss";

const Button = ({ children, getCategories }) => {
  /* EVENTS */
  const refreshHandle = () => getCategories();

  return (
    <button onClick={refreshHandle} className={styles.main}>
      {children}
    </button>
  );
};

export default Button;
