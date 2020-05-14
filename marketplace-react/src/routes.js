import { Dashboard, Person, ShoppingCart } from '@material-ui/icons';
import { Cart, DashboardView, Profile } from './views';

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardView
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: Person,
    component: Profile
  },
  {
    path: "/cart",
    name: "Cart",
    icon: ShoppingCart,
    component: Cart
  }
];

export default routes;
