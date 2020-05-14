import { Box, CssBaseline, makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import CopyrightFooter from "./components/CopyrightFooter";
import NavBar from './components/Navigation/NavBar';
import SideBar from './components/Navigation/SideBar';
import { selectFirebaseToken } from './redux/reducers';
import routes from './utils/routes';
import Login from './views/Login/Login';

import { MockItems } from './data/mockData'
import { getMockItems } from './redux/actions/items'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    //paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  }
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const firebaseToken = useSelector(selectFirebaseToken);
  const [appLoading, setAppLoading] = useState(false);
  const defaultRoute = firebaseToken ? '/dashboard' : '/';
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getItemsAsync = async () => {
      setAppLoading(true);
      await new Promise(r => setTimeout(r, 2000));
      dispatch(getMockItems(MockItems))
      setAppLoading(false);
    };

    if (firebaseToken) {
      getItemsAsync();
    }
  }, [firebaseToken]);

  if (appLoading) {
    return (
      <Container className="mh-100">
        <div className="mh-100 justify-content-center align-items-center text-center">
          <CircularProgress size="lg" color="primary" />
          <p style={{ paddingLeft: '20px' }}>Initializing App...</p>
        </div>
      </Container>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavBar defaultRoute={defaultRoute} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            {
              firebaseToken
                ? routes.map((route) => (
                  <Route key={route.path} path={route.path}>
                    <route.component />
                  </Route>
                ))
                : (
                  <Route exact path="/">
                    <Login />
                  </Route>
                )
            }
            <Redirect to={defaultRoute} />
          </Switch>

          {/* <ItemDetails/> */}
          
          <Box pt={4}>
            <CopyrightFooter />
          </Box>
        </Container>
      </main>


    </div>
  )
};

export default App;