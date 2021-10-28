import { combineReducers } from "redux"

import currentUserReducer from "./currentUserReducer"
import usersReducer from "./usersReducer"
import sectionsReducer from './sectionsReducer'
import subsectionsReducer from "./subsectionsReducer"
import topicsReducer from './topicsReducer'

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
    sections: sectionsReducer,
    subsections: subsectionsReducer,
    topics: topicsReducer,
})

export default rootReducer