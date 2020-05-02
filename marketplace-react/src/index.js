import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Router } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
  {/* wonder how to integrate this with login ... hmnn */}
    <Route exact path="/" component={App} /> 
  </Router>,
  document.getElementById("root")
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
