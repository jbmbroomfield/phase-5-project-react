import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import CurrentUser from './components/CurrentUser'
import { connect } from 'react-redux'

import UsersContainer from './containers/UsersContainer'
import LoginContainer from './containers/LoginContainer.js'
import NavbarContainer from './containers/NavbarContainer'

import { fetchCurrentUser } from './actions/currentUserActions'

const App = ({ fetchCurrentUser }) => {

  useEffect(() => {
    fetchCurrentUser()
  }, [fetchCurrentUser])

  return (
    <Router>
      <div className="App">
        <NavbarContainer />
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

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
