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

const App = ({
	fetchCurrentUser,
	fetchSections,
	fetchSubsections,
	fetchTopics,
	fetchUsers,
}) => {

	const openConnection = () => {
		return new WebSocket("ws://localhost:3000/cable")
	}

	// webSocket.onopen = event => {
		
	// 	console.log('fetching data')
	// 	fetchData()
	// 	const subscribeMsg = {
	// 		"command": "subscribe",
	// 		"identifier": '{"channel": "MainChannel"}'
	// 	}
	// 	webSocket.send(JSON.stringify(subscribeMsg))
	// }

	useEffect(() => {

		const fetchData = () => {
			fetchCurrentUser()
			fetchSections()
			fetchSubsections()
			fetchTopics()
			fetchUsers()
		}

		console.log('fetching data')
		fetchData()
		const webSocket = openConnection()
		// webSocket.addEventListener('open', () => {
		// 	console.log('opened')
		// 	webSocket.send('opened!!!')
		// })
		webSocket.addEventListener('message', event => {
			const data = JSON.parse(event.data)
			if (data.message && data.message.type === 'update') {
				fetchData()
			}
		});
		webSocket.onopen = event => {
			const subscribeMsg = {
				"command": "subscribe",
				"identifier": '{"channel": "MainChannel"}'
			}
			webSocket.send(JSON.stringify(subscribeMsg))
		}
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
			<CurrentUser />
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
