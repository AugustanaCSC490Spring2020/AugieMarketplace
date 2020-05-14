
import { AppBar, IconButton, Link, Toolbar, Tooltip } from "@material-ui/core";
import { Menu, Favorite, ExitToApp } from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person";
import PowerOffIcon from "@material-ui/icons/PowerOff";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { selectFirebaseToken } from "../../redux/reducers";
import history from "../../utils/history";
import { useStyles } from "./styles";


// function SearchBar(props) {
//   return (
//     <FormControl>
//       <Input
//         endAdornment={
//           <InputAdornment position="end">
//             <IconButton>
//               <Search style={{ color: "white" }} />
//             </IconButton>
//           </InputAdornment>
//         }
//         value={props.query}
//         onChange={(e) => props.setQuery(e.target.value)}
//       />
//     </FormControl>
//   );
// }

const NavBar = (props) => {
  const { defaultRoute } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const firebaseToken = useSelector(selectFirebaseToken);

  const pushToProfile = () => history.push("/profile");

  const pushToShoppingCart = () => history.push("./shoppingcart");

  const pushToDefaultRoute = () => history.push(defaultRoute);

  return (
    <div>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, props.open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              props.open && classes.menuButtonHidden
            )}
          >
            <Menu />
          </IconButton> */}
          <Link
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
            onClick={pushToDefaultRoute}
          >
            AugieMarketPlace
          </Link>
          {firebaseToken && (
            <>

              <Tooltip title="Profile">
                <IconButton color="inherit" onClick={pushToProfile}>
                  <PersonIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Favorites">
                <IconButton color="inherit" onClick={pushToShoppingCart}>
                  <Favorite />
                </IconButton>
              </Tooltip>

              <Tooltip title="SignOut">
                <IconButton color="inherit" onClick={() => dispatch(logout)}>
                  <ExitToApp />
                </IconButton>
              </Tooltip>


            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar