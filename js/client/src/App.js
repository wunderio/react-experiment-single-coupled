import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import DashboardPage from './components/DashboardPage/DashboardPage';
import MemberDataPage from './components/MemberDataPage/MemberDataPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

          <Link to="/">Dashboard</Link>
          <Link to="/member-data">Member Data</Link>
          <a href="/user">Drupal User</a>

          <Switch>
            <Route exact path="/" component={DashboardPage}/>
            <Route path="/member-data" component={MemberDataPage}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
