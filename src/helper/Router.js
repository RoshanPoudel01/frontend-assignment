import { createBrowserRouter } from "react-router-dom";

import NormalUserNav from "../layout/normalUserHeader";
import Detailspage from "../views/ItemDetails";
import MainComponent from "../views/MainComponent";
import SearchPage from "../views/SearchPage";
import { NavURL } from "./Navlink";

export const router = createBrowserRouter([
  {
    path: NavURL.Dashboard,
    element: (
      <NormalUserNav>
        <MainComponent />
      </NormalUserNav>
    ),
  },
  {
    path: NavURL.itemdetails,
    element: (
      <NormalUserNav>
        <Detailspage />
      </NormalUserNav>
    ),
  },
]);
