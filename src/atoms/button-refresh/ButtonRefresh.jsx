import styles from "./styles.module.scss";

const ButtonRefresh = ({ children, getCategories, title }) => {
  /* EVENTS */
  const refreshHandle = () => getCategories();

  return (
    <button onClick={refreshHandle} className={styles.main} title={title}>
      {children}
    </button>
  );
};

export default ButtonRefresh;
