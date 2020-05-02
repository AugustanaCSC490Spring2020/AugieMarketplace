import { Dashboard, Help, Notifications, Person, Settings, ShoppingCart } from '@material-ui/icons';
import { DashboardView, Profile, Cart, HelpView, NotificationsView, SettingsView } from './views';

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
    component: Cart,
    layout: "/admin"
  },
  {
    path: "/help",
    name: "Help",
    icon: Help,
    component: HelpView
  },
  {
    path: "/settings",
    name: "Settings",
    icon: Settings,
    component: SettingsView
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsView
  }
];

export default routes;
