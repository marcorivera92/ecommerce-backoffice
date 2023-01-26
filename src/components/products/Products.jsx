import { useState, useEffect } from "react";
import { GET, DELETE } from "../../utils/http";
import Modal from "../modal";
import ButtonRefresh from "../../atoms/button-refresh/";
import ButtonAdd from "../../atoms/button-add";
import ButtonDelete from "../../atoms/button-delete";
import ButtonEdit from "../../atoms/button-edit";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import styles from "./styles.module.scss";
import ModalFormProducts from "../modal-form-products/ModalFormProducts";

const Products = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isRotate, setRotate] = useState(false);
  const [isModalForm, setModalForm] = useState(false);

  /* FETCH */

  const getProducts = () => {
    setLoading(true);
    GET("products").then((data) => {
      console.log(data);
      setProducts(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteElement = (id) => {
    DELETE("products", id).then((data) => {
      if (data.status === 200) {
        getProducts();
      }
    });
  };

  /* EVENTS */
  const animationRotate = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 1_000);
  };

  return (
    <div className={styles.main}>
      <div className={styles.tableContainer}>
        <div className={styles.tableHead}>
          <h1>Products</h1>
          <div className={styles.headButtons}>
            {/* Button Add */}

            {/* Button Refresh */}
            <ButtonRefresh getProducts={getProducts} title="Refresh">
              <CachedOutlinedIcon
                onClick={() => animationRotate()}
                className={`${styles.refresh} ${isRotate && styles.rotate}`}
              />
            </ButtonRefresh>
          </div>
        </div>

        {/* MAIN SECTION -> MAP */}
        {loading ? (
          "Loading..."
        ) : (
          <div className={styles.tableContent}>
            {product.map((item, index) => (
              <div className={styles.tableItem} key={item.category.id}>
                <div className={styles.itemLeftCol}>
                  <p> {item.category.id} </p>
                  <div className={styles.imageWrapper}>
                    <img src={item.images[0]} alt={item.title} />
                  </div>
                  <div className={styles.tableText}>
                    <h6 className={styles.categoryName}> {item.title} </h6>
                    <p className={styles.description}> {item.description} </p>
                  </div>
                </div>
                <div className={styles.price}>
                  <p>${item.price}</p>
                </div>

                <div className={styles.buttons}>
                  <button onClick={() => setModalForm((prev) => !prev)}>
                    <DriveFileRenameOutlineOutlinedIcon />
                  </button>

                  <ButtonDelete
                    getProducts={getProducts}
                    id={item.id}
                    title="Delete"
                  />
                </div>

                {/* MODAL */}
                {isModalForm && (
                  <ModalFormProducts
                    setModalForm={setModalForm}
                    isModalForm={isModalForm}
                    reloadItems={getProducts}
                    deleteElement={deleteElement}
                    item={item}
                    key={index}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
