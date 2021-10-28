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
import SectionsContainer from './containers/SectionsContainer'
import SubsectionContainer from './containers/SubsectionContainer'

import { fetchCurrentUser } from './actions/currentUserActions'
import { fetchSections } from './actions/sectionsActions'
import { fetchSubsections } from './actions/subsectionsActions'

const App = ({ fetchCurrentUser, fetchSections, fetchSubsections }) => {

	useEffect(() => {
		fetchCurrentUser()
		fetchSections()
		fetchSubsections()
	}, [fetchCurrentUser, fetchSections, fetchSubsections])

	return (
		<Router>
		<div className="App">
			<NavbarContainer />
			<CurrentUser />
			<Route exact path="/"><SectionsContainer /></Route>
			<Route exact path="/users"><UsersContainer /></Route>
			<Route exact path="/login"><LoginContainer /></Route>
			<Route path="/subsections/:subsectionId" render={routerProps => <SubsectionContainer {...routerProps} />} />
		</div>
		</Router>
	);
}

const mapStateToProps = state => ({
  	currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
	fetchCurrentUser: () => dispatch(fetchCurrentUser()),
	fetchSections: () => dispatch(fetchSections()),
	fetchSubsections: () => dispatch(fetchSubsections()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
