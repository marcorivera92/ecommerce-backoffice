import Sidebar from "../sidebar";
import Header from "../header";
import Feed from "../feed";
import styles from "./styles.module.scss";

const Layout = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftColumn}>
        <Sidebar />
      </div>
      <div className={styles.rightColumn}>
        <Header />
        <Feed />
      </div>
    </div>
  );
};

export default Layout;
