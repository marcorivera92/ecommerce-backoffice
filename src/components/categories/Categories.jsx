import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Modal from "../modal";
import ButtonRefresh from "../../atoms/button-refresh/";
import ButtonAdd from "../../atoms/button-add";
import ButtonDelete from "../../atoms/button-delete";
import ButtonEdit from "../../atoms/button-edit";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import styles from "./styles.module.scss";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isRotate, setRotate] = useState(false);
  const [isModalActive, setModalActive] = useState(false);

  /* FETCH */
  const getCategories = () => {
    setLoading(true);
    GET(`categories`).then((category) => {
      setCategory(category);
      setLoading(false);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  /* EVENTS */
  const rotateHandle = () => setRotate((prev) => !prev);
  const modalHandle = () => setModalActive((prev) => !prev);

  return (
    <div className={styles.main}>
      <div className={styles.tableContainer}>
        {/* MODAL */}
        <div
          className={`${styles.modal} ${
            isModalActive ? styles.modalActive : ""
          }`}
        >
          {isModalActive && (
            <Modal
              setModalActive={setModalActive}
              getCategories={getCategories}
              category={category}
            />
          )}
        </div>

        <div className={styles.tableHead}>
          <h1>Categories</h1>
          <div className={styles.headButtons}>
            {/* Button Add */}
            <ButtonAdd
              getCategories={getCategories}
              modalHandle={modalHandle}
              category={category}
              title="Add"
            />

            {/* Button Refresh */}
            <ButtonRefresh getCategories={getCategories} title="Refresh">
              <CachedOutlinedIcon
                onClick={rotateHandle}
                className={`${styles.refresh} ${isRotate && styles.rotate}`}
              />
            </ButtonRefresh>
          </div>
        </div>
        {loading ? (
          "Loading..."
        ) : (
          <div className={styles.tableContent}>
            {category.map((item) => (
              <div className={styles.tableItem} key={item.id}>
                <div className={styles.itemLeftCol}>
                  <p> {item.id} </p>
                  <div className={styles.imageWrapper}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <h6 className={styles.categoryName}> {item.name} </h6>
                </div>

                <div className={styles.buttons}>
                  <ButtonEdit
                    getCategories={getCategories}
                    modalHandle={modalHandle}
                    category={{
                      name: item.name,
                      image: item.image,
                      id: item.id,
                    }}
                    title="Edit"
                  />

                  <ButtonDelete
                    getCategories={getCategories}
                    id={item.id}
                    title="Delete"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
