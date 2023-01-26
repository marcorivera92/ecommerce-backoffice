import { useState } from "react";
import styles from "./styles.module.scss";

import { PUT } from "../../utils/http";

const ModalFormProducts = ({
  item,
  deleteElement,
  getProducts,
  isModalForm,
  setModalForm,
}) => {
  const [formData, setFormData] = useState({
    title: item.title,
    price: item.price,
    description: item.description,
    categoryId: item.category.id,
    images: [item.images[0]],
  });
  // const [showForm, setShowForm] = useState(false);

  const handleForm = (input, e) => {
    let inputValue = e.target.value ? e.target.value : 0;
    if (input === "price" || input === "categoryId") {
      inputValue = parseInt(inputValue);
    }

    if (input === "images") {
      inputValue = [inputValue];
    }

    setFormData({
      ...formData,
      [input]: inputValue,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    PUT("products", formData, item.id)
      .then((res) => res.json())
      .then((data) => {
        setModalForm(false);
        getProducts();
        console.log(data);
      });
  };

  return (
    <div className={styles.main}>
      {/* <li onClick={() => deleteElement(item.id)}>{item.title}</li> */}
      <div className={styles.overlay}>
        <div className={styles.modalForm}>
          {isModalForm && (
            <form onSubmit={(e) => submitForm(e)} className={styles.form}>
              <input
                value={formData.title}
                onChange={(e) => handleForm("title", e)}
                type="text"
              />
              <input
                value={formData.price}
                onChange={(e) => handleForm("price", e)}
                type="text"
              />
              <input
                value={formData.description}
                onChange={(e) => handleForm("description", e)}
                type="text"
              />
              <input
                value={formData.categoryId}
                onChange={(e) => handleForm("categoryId", e)}
                type="text"
              />
              <input
                value={formData.images[0]}
                onChange={(e) => handleForm("images", e)}
                type="text"
              />
              <button>Submit</button>
            </form>
          )}
        </div>
      </div>

      {/* <button onClick={() => setShowForm(!showForm)}></button> */}
    </div>
  );
};

export default ModalFormProducts;
