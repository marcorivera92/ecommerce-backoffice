import { useState } from "react";
import Sidebar from "../sidebar";
import Header from "../header";
import Feed from "../feed";
import styles from "./styles.module.scss";

const Layout = () => {
  const [route, setRoute] = useState("home");

  return (
    <div className={styles.main}>
      <div className={styles.leftColumn}>
        <Sidebar setRoute={setRoute} />
      </div>
      <div className={styles.rightColumn}>
        <Header />
        <Feed route={route} />
      </div>
    </div>
  );
};

export default Layout;
