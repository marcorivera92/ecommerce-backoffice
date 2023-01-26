import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ModalEdit from "../../components/modal-edit";

import { useState } from "react";
import styles from "./styles.module.scss";

const ButtonEdit = ({
  getCategories,
  category,

  title,
}) => {
  const [isModalEdit, setModalEdit] = useState(false);

  return (
    <>
      {isModalEdit && (
        <ModalEdit
          getCategories={getCategories}
          category={category}
          setModalEdit={setModalEdit}
        />
      )}

      <button
        onClick={() => setModalEdit(true)}
        className={styles.main}
        title={title}
      >
        <DriveFileRenameOutlineOutlinedIcon />
      </button>
    </>
  );
};

export default ButtonEdit;
