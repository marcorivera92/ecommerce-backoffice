import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Button from "../../atoms/button/Button";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import styles from "./styles.module.scss";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className={styles.main}>
      <div className={styles.tableContainer}>
        <div className={styles.tableHead}>
          <h1>Categories</h1>
          <Button getCategories={getCategories}>
            <CachedOutlinedIcon />
          </Button>
        </div>
        {loading ? (
          "loading..."
        ) : (
          <div className={styles.tableContent}>
            {category.map((item) => (
              <div className={styles.tableItem} key={item.id}>
                <p> {item.id} </p>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.name} />
                </div>

                <h6 className={styles.categoryName}> {item.name} </h6>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
