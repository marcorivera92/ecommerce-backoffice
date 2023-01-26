import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import styles from "./styles.module.scss";

const ButtonAdd = ({ setModalActive, title }) => {
  /* EVENTS */
  const modalHandle = () => setModalActive((prev) => !prev);

  return (
    <button onClick={modalHandle} className={styles.main} title={title}>
      <AddOutlinedIcon />
    </button>
  );
};

export default ButtonAdd;
