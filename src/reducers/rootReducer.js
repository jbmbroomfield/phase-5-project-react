import { combineReducers } from "redux"

import currentUserReducer from "./currentUserReducer"
import usersReducer from "./usersReducer"

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
})

export default rootReducer