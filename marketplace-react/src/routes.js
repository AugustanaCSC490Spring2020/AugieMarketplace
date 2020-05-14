import { Dashboard } from '@material-ui/icons';
import { DashboardView } from './views';

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardView
  },
  //could add other components here
];

export default routes;
