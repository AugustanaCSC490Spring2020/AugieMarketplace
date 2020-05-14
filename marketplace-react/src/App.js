import React, { useEffect, useState } from 'react';
import routes from "./routes";
import Login from "./views/Login/Login";
import NavBar from './components/Common/NavBar'
import { useSelector, useDispatch } from 'react-redux';
import { selectFirebaseToken } from './redux/reducers';
import { Route, Redirect, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

const App = () => {
  const firebaseToken = useSelector(selectFirebaseToken);
  const [appLoading, setAppLoading] = useState(false);
  const defaultRoute = firebaseToken ? '/dashboard' : '/';

  useEffect(() => {
    const getItemsAsync = async () => {
      setAppLoading(true);
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
    <div>
      <NavBar defaultRoute={defaultRoute} />
      <Container fluid className="pt-5">
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
      </Container>
    </div>
  );
};

export default App;