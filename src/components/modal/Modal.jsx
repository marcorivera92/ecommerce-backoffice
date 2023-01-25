import ModalForm from "../modal-form/ModalForm";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import styles from "./styles.module.scss";

const Modal = ({ getCategories, category, setModalActive }) => {
  // EVENTS
  const closeModal = () => setModalActive((prev) => !prev);

  return (
    <div className={styles.main}>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <ModalForm
            setModalActive={setModalActive}
            category={category}
            getCategories={getCategories}
          />
          <button
            onClick={closeModal}
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

export default Modal;
