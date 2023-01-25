import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import styles from "./styles.module.scss";

const ButtonAdd = ({ modalHandle, title }) => {
  /* EVENTS */

  return (
    <button onClick={modalHandle} className={styles.main} title={title}>
      <AddOutlinedIcon />
    </button>
  );
};

export default ButtonAdd;
