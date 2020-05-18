import React from "react";
import { AppBar, IconButton, FormControl, Input, InputAdornment, Link, Toolbar, Tooltip } from "@material-ui/core";
import { Menu, Favorite, ExitToApp, Search, Person as PersonIcon } from "@material-ui/icons";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { selectFirebaseToken } from "../../redux/reducers";
import history from "../../utils/history";
import { useStyles } from "./styles";
import { signOut } from '../../firebase/firebase'
import CreatePostDialogue from "../../views/CreatePost/CreatePostDialogue";
import { useLocation } from "react-router";
import { setQuery } from '../../redux/actions/items';
import store from '../../redux/store';

function SearchBar() {
  let query = Object.assign(store.getState().items.query);
  return (
    <FormControl>
      <Input
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <Search style={{ color: "white" }} />
            </IconButton>
          </InputAdornment>
        }
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </FormControl>
  );
}

const NavBar = (props) => {
  const { defaultRoute } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const firebaseToken = useSelector(selectFirebaseToken);

  const pushToProfile = () => history.push("./profile");

  const pushToFavorites = () => history.push("./favorites");

  const pushToDefaultRoute = () => history.push(defaultRoute);

  const logOut = () => {
    signOut
      .then(
        dispatch(logout)
      )
      .catch(err =>
        console.log(err) //TODO: show error --> try again
      )
  }
 
  let location = useLocation();
  console.log(store.getState().items.query)
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
              {location.pathname == "/dashboard" &&
                <React.Fragment>
                  <SearchBar />
                  <CreatePostDialogue />
                </React.Fragment>
              }
              <Tooltip title="Profile">
                <IconButton color="inherit" onClick={pushToProfile}>
                  <PersonIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Favorites">
                <IconButton color="inherit" onClick={pushToFavorites}>
                  <Favorite />
                </IconButton>
              </Tooltip>

              <Tooltip title="SignOut">
                <IconButton color="inherit" onClick={logOut}>
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