import React, { Component } from 'react';
import Nav from './components/Nav';
import Timeline from './pages/Timeline';
import AddMessage from './pages/AddMessage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />

          <Route exact path={'/'} render={props =>
            (<Timeline />)}
          />
          <Route exact path={'/message'} render={props =>
            (<AddMessage />)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
