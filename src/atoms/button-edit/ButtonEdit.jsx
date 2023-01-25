import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import styles from "./styles.module.scss";

const ButtonEdit = ({ modalHandle, title }) => {
  return (
    <button onClick={modalHandle} className={styles.main} title={title}>
      <DriveFileRenameOutlineOutlinedIcon />
    </button>
  );
};

export default ButtonEdit;
