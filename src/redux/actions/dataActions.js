import { fetchCurrentUser } from "./currentUserActions"
// import { fetchSections } from "./sectionsActions"
// import { fetchSubsections } from "./subsectionsActions"
import { fetchUsers } from "./usersActions"

export const fetchData = () => (
    dispatch => {
        dispatch(fetchCurrentUser())
        // dispatch(fetchSections())
        // dispatch(fetchSubsections())
        dispatch(fetchUsers())
    }
)