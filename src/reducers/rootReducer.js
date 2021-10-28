import { combineReducers } from "redux"

import currentUserReducer from "./currentUserReducer"
import usersReducer from "./usersReducer"
import sectionsReducer from './sectionsReducer'
import subsectionsReducer from "./subsectionsReducer"

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
    sections: sectionsReducer,
    subsections: subsectionsReducer,
})

export default rootReducer