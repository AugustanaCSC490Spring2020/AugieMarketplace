import React from 'react';
import './App.css';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import CreatePost from './views/CreatePost/CreatePost';
import CreatePostForm from './views/CreatePost/CreatePostForm';


export default class App extends React.Component {
  constructor(props) {
    super(props);
      //state management for now
  }


  render() {
    return (
      <React.Fragment>
        {/* components go here */}
        {/* <Login></Login> */}
        {/* <Dashboard></Dashboard> */}
        {/* <CreatePost></CreatePost> */}
        <CreatePostForm></CreatePostForm>
      </React.Fragment>
    );
  }
}

