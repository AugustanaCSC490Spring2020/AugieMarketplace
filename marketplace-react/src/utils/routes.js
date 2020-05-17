import { Dashboard } from '@material-ui/icons';
<<<<<<< HEAD
import { DashboardView, ItemDetails } from '../views';
=======
import { DashboardView, ItemDetails, Profile, Cart  } from '../views';
>>>>>>> 75db6c9aa84d5d4711fb555733e5750b2cd099e5

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
<<<<<<< HEAD
=======
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
>>>>>>> 75db6c9aa84d5d4711fb555733e5750b2cd099e5
  //could add other components here
];

export default routes;
