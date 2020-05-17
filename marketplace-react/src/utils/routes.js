import { Dashboard } from '@material-ui/icons';
import { DashboardView, ItemDetails, Profile, Cart  } from '../views';

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardView
  },
  {
    path: "/items/:itemId",
    name: "ViewItem",
    component: ItemDetails
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Cart
  }
  ,
  // {
  //   path: "/users/userId",
  //   name: "Profile",
  //   component: Profile
  // }
  //could add other components here
];

export default routes;