import { menuLinks } from "../../constants/menu";
import SidebarLink from "./../sidebar-link";

import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import styles from "./styles.module.scss";

const Sidebar = ({ setRoute }) => {
  return (
    <div className={styles.main}>
      <div className={styles.titleWrapper}>
        <CurrencyBitcoinOutlinedIcon className={styles.logo} />
        <h1 className={styles.title}> Dashboard </h1>
      </div>

      <div className="menu">
        {menuLinks.map((item) => (
          <SidebarLink
            setRoute={setRoute}
            route={item.route}
            icon={item.icon}
            key={item.id}
            label={item.label}
          />
        ))}
      </div>

      <div className={styles.menuFooter}>
        <InfoOutlinedIcon /> Help & FAQ
      </div>
    </div>
  );
};

export default Sidebar;
