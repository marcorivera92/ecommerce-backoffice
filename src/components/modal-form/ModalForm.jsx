import { useEffect, useState } from "react";
import { POST, PUT } from "../../utils/http";
import styles from "./styles.module.scss";

const ModalForm = ({ getCategories, category, setModalActive }) => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (category) {
      setForm({
        name: category.name,
        image: category.image,
      });
      setEdit(true);
    }
  }, []);

  const handleForm = (input, e) => {
    setForm({
      ...form,
      [input]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    POST("categories", form).then((category) => {
      if (category.status === 201) {
        setModalActive(false);
        getCategories();
      }
    });
  };

  const editForm = (e) => {
    e.preventDefault();
    PUT("categories", form, "/" + category.id).then((category) => {
      if (category.status === 200) {
        setModalActive(false);
        getCategories();
      }
    });
  };

  return (
    <div className={styles.main}>
      <form className={styles.form}>
        <input
          type="text"
          value={form.name}
          placeholder="Name"
          onChange={(e) => handleForm("name", e)}
        />
        <input
          type="text"
          value={form.image}
          onChange={(e) => handleForm("image", e)}
          placeholder="Image"
        />

        <button type="submit" onClick={(e) => submitForm(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

/* {edit ? (
    <button type="submit" onClick={(e) => editForm(e)}>
      Edit
    </button>
  ) : (
    <button type="submit" onClick={(e) => submitForm(e)}>
      Submit
    </button>
  )} */

export default ModalForm;
