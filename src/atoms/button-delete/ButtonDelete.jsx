import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import styles from "./styles.module.scss";
import { DELETE } from "../../utils/http";

const ButtonDelete = ({ id, getCategories, title }) => {
  const deleteCategory = () => {
    DELETE(`categories/` + id).then((data) => {
      console.log(data);
      getCategories();
    });
  };

  return (
    <button onClick={deleteCategory} className={styles.main} title={title}>
      <DeleteSweepOutlinedIcon />
    </button>
  );
};

export default ButtonDelete;
