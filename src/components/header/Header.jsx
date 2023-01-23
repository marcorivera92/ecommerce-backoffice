import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.searchbar}>
        <SearchOutlinedIcon className="widgets__searchIcon" />
        <input placeholder="Search NFTs and more..." type="text" />
      </div>

      <div className={styles.headerMenu}>
        <button> + New </button>
        <MailOutlineOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className={styles.userAccount}>
          <img src="/images/avatar.png" alt="avatar" />
          <h3> Marco </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
