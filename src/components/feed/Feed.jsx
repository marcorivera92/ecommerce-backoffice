import Home from "../home";
import Categories from "../categories";
import Products from "../products";
import Orders from "../orders";
import Users from "../users";
import styles from "./styles.module.scss";

const Feed = ({ route }) => {
  return (
    <div className={styles.main}>
      {route === "home" && <Home />}
      {route === "categories" && <Categories />}
      {route === "products" && <Products />}
      {route === "orders" && <Orders />}
      {route === "users" && <Users />}
    </div>
  );
};

export default Feed;
