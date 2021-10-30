import { fetchCurrentUser } from './currentUserActions'
import { fetchSections } from './sectionsActions'
import { fetchSubsections } from './subsectionsActions'
import { fetchTopics } from './topicsActions'
import { fetchUsers } from './usersActions'

export const fetchData = () => {
	fetchCurrentUser()
	fetchSections()
	fetchSubsections()
	fetchTopics()
	fetchUsers()
}