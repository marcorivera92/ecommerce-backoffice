import styles from "./styles.module.scss";

const SidebarLink = ({ label, icon }) => {
  return (
    <div>
      <li className={styles.main}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.label}>{label}</div>
      </li>
    </div>
  );
};

export default SidebarLink;
