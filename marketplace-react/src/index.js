//Before Redux
// import { createBrowserHistory } from "history";
// import React from "react";
// import ReactDOM from "react-dom";
// import { Route, Router } from "react-router-dom";
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// const hist = createBrowserHistory();

// ReactDOM.render(
//   <Router history={hist}>
//     {/* wonder how to integrate this with login ... hmnn */}
//     <Route path="/" component={App} />
//   </Router>,
//   document.getElementById("root"),
// );


// After Redux
import React from 'react';
import ReactDOM from 'react-dom';
import store, { persistor } from './redux/store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import history from './utils/history';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
