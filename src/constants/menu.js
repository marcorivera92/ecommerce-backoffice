import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

export const menuLinks = [
  {
    id: 1,
    label: "Home",
    route: "home",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: 2,
    label: "Categories",
    route: "categories",
    icon: <SegmentOutlinedIcon />,
  },
  {
    id: 3,
    label: "Products",
    route: "products",
    icon: <Inventory2OutlinedIcon />,
  },

  {
    id: 5,
    label: "Orders",
    route: "orders",
    icon: <WalletOutlinedIcon />,
  },
  {
    id: 6,
    label: "User",
    route: "users",
    icon: <AdminPanelSettingsOutlinedIcon />,
  },
];
