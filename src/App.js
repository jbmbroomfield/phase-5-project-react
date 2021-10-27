import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import CurrentUser from './components/CurrentUser'
import { connect } from 'react-redux'

import { setCurrentUser } from './actions/currentUserActions'

import UsersContainer from './containers/UsersContainer'
import LoginContainer from './containers/LoginContainer.js'

import api from './api'

const App = props => {

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    jwt && api('current_user', null, undefined, jwt)
    .then(json => {
        json.data && props.setCurrentUser(json.data.attributes)
    })
  }, [])

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

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = {
  setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
