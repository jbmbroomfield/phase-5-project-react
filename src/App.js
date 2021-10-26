import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import CurrentUser from './components/CurrentUser'

import UsersContainer from './containers/UsersContainer'
import LoginContainer from './containers/LoginContainer.js'

const App = () => {

  return (
    <Router>
      <div className="App">
        <CurrentUser />
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/users"><UsersContainer /></Route>
        <Route exact path="/login"><LoginContainer /></Route>
      </div>
    </Router>
  );
}

export default App;
