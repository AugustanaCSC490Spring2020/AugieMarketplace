import { Dashboard } from '@material-ui/icons';
import { DashboardView, ItemDetails } from '../views';

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
  //could add other components here
];

export default routes;
