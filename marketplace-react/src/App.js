import React from 'react';
import './App.css';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import CreatePost from './views/CreatePost/CreatePost';
import CreatePostForm from './views/CreatePost/CreatePostForm';
import Submit from './views/CreatePost/Submit';
import { MockUser, MockItems } from './data/mockData';
import orderBy from 'lodash/orderBy'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: MockItems,
      user: MockUser,
      query: ""
    }
  }

  setQuery = (val) => {
    this.setState({query: val})
  }


  render() {
    return (
      <React.Fragment>
        {/* components go here */}
        {/* <Login></Login> */}
        <Dashboard
          data={orderBy(
            this.state.query
              ? this.state.data.filter(x =>
                x["name"]
                  .toLowerCase()
                  .includes(this.state.query.toLowerCase())
              ) : this.state.data
          )}
          query={this.state.query}
          setQuery={this.setQuery}
        />
        {/* <CreatePost></CreatePost> */}
        {/* <CreatePostForm></CreatePostForm> */}
        {/* <Submit></Submit> */}
      </React.Fragment>


    );
  }
}

