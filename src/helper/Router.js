import { createBrowserRouter } from "react-router-dom";

import Detailspage from "../views/ItemDetails";
import MainComponent from "../views/MainComponent";

import { NavURL } from "./Navlink";
import SidebarWithHeader from "../layout/normalUserHeader";

export const router = createBrowserRouter([
  {
    path: NavURL.Dashboard,
    element: (
      <SidebarWithHeader>
        <MainComponent />
      </SidebarWithHeader>
    ),
  },
  {
    path: NavURL.itemdetails,
    element: (
      <SidebarWithHeader>
        <Detailspage />
      </SidebarWithHeader>
    ),
  },
  
]);
