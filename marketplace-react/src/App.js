import orderBy from 'lodash/orderBy';
import React from 'react';
import { createSimpleDate } from './data/marketplace';
import { createItem, MockItems, MockUser } from './data/mockData';
import Main from './views/Main/Main';
import DashboardView from './views/Dashboard/Dashboard';
import Login from './views/Login/Login'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: MockItems,
      user: MockUser,
      query: ""
    }

    this.storeSession(this.state)

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
    this.setState({
      data: st.data,
      user: st.user,
      query: ""
    })
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
    this.setState({ data: updatedData });
  }

  render() {
    return (
      <React.Fragment>
        {/* <Main
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

        <div className="app-routes">
          <Switch>
            {/* <Route path="/" component={Login} /> */}
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

