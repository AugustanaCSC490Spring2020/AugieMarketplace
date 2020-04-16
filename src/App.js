import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './views/Dashboard/Dashboard';

export default class App extends React.Component {

  constructor(props) {
      super(props)
  }

  render() {
    return (
      <React.Fragment>
          <Dashboard/>
      </React.Fragment>
    );
  }
}