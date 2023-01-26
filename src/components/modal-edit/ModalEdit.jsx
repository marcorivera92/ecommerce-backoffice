import ModalForm from "../modal-form/ModalForm";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import styles from "./styles.module.scss";

const ModalEdit = ({ getCategories, category, setModalEdit }) => {
  // EVENTS
  const closeModalEdit = () => setModalEdit((prev) => !prev);

  return (
    <div className={styles.main}>
      <div className={styles.modalEditOverlay}>
        <div className={styles.modalEditContent}>
          <ModalForm
            setModalEdit={setModalEdit}
            category={category}
            getCategories={getCategories}
          />
          <button
            onClick={closeModalEdit}
            type="submit"
            className={styles.btnClose}
          >
            <CloseOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
