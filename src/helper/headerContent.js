import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiShoppingCart,
} from "react-icons/fi";
import { NavURL } from "./Navlink";
export const LinkItems = [
  { name: "Home", url: NavURL.Dashboard, icon: FiHome },
  { name: "Cart", icon: FiShoppingCart, url: NavURL.cart },
  // { name: "Explore", icon: FiCompass },
  // { name: "Favourites", icon: FiStar },
  // { name: "Settings", icon: FiSettings },
];
