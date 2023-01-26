import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import styles from "./styles.module.scss";
import { DELETE } from "../../utils/http";

const ButtonDelete = ({ id, getCategories, title, getProducts }) => {
  const deleteCategory = () => {
    DELETE("categories", id).then((data) => {
      console.log(data);
      getCategories();
    });
  };

  const deleteProduct = () => {
    DELETE("products", id).then((data) => {
      console.log(data);
      getProducts();
    });
  };

  return (
    <button
      onClick={() => {
        deleteCategory();
        deleteProduct();
      }}
      className={styles.main}
      title={title}
    >
      <DeleteSweepOutlinedIcon />
    </button>
  );
};

export default ButtonDelete;
