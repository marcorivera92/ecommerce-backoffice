import styles from "./styles.module.scss";

const SidebarLink = ({ label, icon, setRoute, route }) => {
  /* EVENTS */
  const routeHandle = () => setRoute(route);

  return (
    <div>
      <li className={styles.main} onClick={routeHandle}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.label}>{label}</div>
      </li>
    </div>
  );
};

export default SidebarLink;
