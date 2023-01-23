import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const menuLinks = [
  {
    id: 1,
    label: "Home",
    route: "home",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: 2,
    label: "Market",
    route: "market",
    icon: <LocalGroceryStoreOutlinedIcon />,
  },
  {
    id: 3,
    label: "Active Bids",
    route: "bids",
    icon: <InsightsOutlinedIcon />,
  },
  {
    id: 4,
    label: "Favourites",
    route: "favourites",
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    id: 5,
    label: "Wallet",
    route: "wallet",
    icon: <WalletOutlinedIcon />,
  },
  {
    id: 6,
    label: "Settings",
    route: "settings",
    icon: <SettingsOutlinedIcon />,
  },
];
