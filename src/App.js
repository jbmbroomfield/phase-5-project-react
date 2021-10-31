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
import TopicContainer from './containers/TopicContainer'

import { fetchCurrentUser } from './actions/currentUserActions'
import { fetchSections } from './actions/sectionsActions'
import { fetchSubsections } from './actions/subsectionsActions'
import { fetchTopics } from './actions/topicsActions'
import { fetchUsers } from './actions/usersActions'
import createSocket from './createSocket'

const App = ({
	fetchCurrentUser,
	fetchSections,
	fetchSubsections,
	fetchTopics,
	fetchUsers,
}) => {

	useEffect(() => {
		const params = {
			channel: "MainChannel"
		}
		const onUpdate = () => {
			fetchCurrentUser()
			fetchSections()
			fetchSubsections()
			fetchTopics()
			fetchUsers()
		}
		const socket = createSocket(params, onUpdate)
		return () => socket.close(1000)
	}, [
		fetchCurrentUser,
		fetchSections,
		fetchSubsections,
		fetchTopics,
		fetchUsers,
	])

	return (
		<Router>
		<div className="App">
			<NavbarContainer />
			<Route exact path="/"><SectionsContainer /></Route>
			<Route exact path="/users"><UsersContainer /></Route>
			<Route exact path="/login"><LoginContainer /></Route>
			<Route
				path="/subsections/:subsectionId"
				render={routerProps => <SubsectionContainer {...routerProps}/>}
			/>
			<Route
				path="/topics/:topicId"
				render={routerProps => <TopicContainer {...routerProps}/>}
			/>
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
	fetchTopics: () => dispatch(fetchTopics()),
	fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
