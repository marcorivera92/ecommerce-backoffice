import styles from "./styles.module.scss";

const ButtonRefresh = ({ children, title, reload }) => {
  /* EVENTS */
  const refreshHandle = () => {
    reload();
  };

  return (
    <button onClick={refreshHandle} className={styles.main} title={title}>
      {children}
    </button>
  );
};

export default ButtonRefresh;
