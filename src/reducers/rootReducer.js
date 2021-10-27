import { combineReducers } from "redux"

import currentUserReducer from "./currentUserReducer"
import usersReducer from "./usersReducer"
import sectionsReducer from './sectionsReducer'

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
    sections: sectionsReducer,
})

export default rootReducer