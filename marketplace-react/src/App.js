import React from 'react';
import './App.css';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import CreatePost from './views/CreatePost/CreatePost';
import CreatePostForm from './views/CreatePost/CreatePostForm';
import Submit from './views/CreatePost/Submit';
import { createItem, MockUser, MockItems } from './data/mockData';
import orderBy from 'lodash/orderBy'
import { createSimpleDate } from './data/marketplace';
import ItemForm from './views/CreatePostTest/PostItemForm';
import Profile from './views/ProfilePage/Profile';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: MockItems,
      user: MockUser,
      query: ""
    }

    if (this.hasSaves) {
      this.getSession()
    } else {
      this.storeSession(this.state)
    }
  }

  hasSaves = () => {
    if (localStorage.getItem('augieMarketPlace') === null) {
      return false;
    } return true;
  }

  storeSession = (data) => {
    localStorage.setItem('augieMarketPlace', JSON.stringify(data));
  }

  getSession = () => {
    let st = localStorage.getItem('augieMarketPlace');
    st = JSON.parse(st);
    this.state = {
      data: st.data,
      user: st.user,
      query: ""
    }
  }

  setQuery = (val) => {
    this.setState({ query: val })
  }

  createPost = (
    name: String,
    user: String,
    price: Number,
    description: String,
    tags: String[],
    img: String
  ) => {
    let item = createItem(name, user, price, createSimpleDate(new Date()), description, tags, [img]),
    updatedData = this.state.data;
    updatedData.push(item);
    this.setState({data: updatedData});
  }

  render() {
    return (
      <React.Fragment>
        {/* components go here */}
        {/* <Login></Login> */}
        {/* <Profile></Profile> */}
        <ItemForm></ItemForm>
        {/* <Dashboard
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
          createPost={this.createPost}
        /> */}
      </React.Fragment>
    );
  }
}

