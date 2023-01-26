import styles from "./styles.module.scss";

const SidebarLink = ({ label, icon, setRoute, route, stateRoute }) => {
  /* EVENTS */
  const routeHandle = () => setRoute(route);

  return (
    <div
      className={`${styles.wrapper} ${
        stateRoute === route ? styles.activeMark : ""
      }`}
    >
      <li
        className={`${styles.main} ${
          stateRoute === route ? styles.active : ""
        }`}
        onClick={routeHandle}
      >
        <div className={styles.icon}>{icon}</div>
        <div className={styles.label}>{label}</div>
      </li>
    </div>
  );
};

export default SidebarLink;
