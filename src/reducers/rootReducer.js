import { combineReducers } from "redux"

import currentUserReducer from "./currentUserReducer"
import usersReducer from "./usersReducer"
import sectionsReducer from './sectionsReducer'
import subsectionsReducer from "./subsectionsReducer"
import topicsReducer from './topicsReducer'
import postsReducer from "./postsReducer"
import userTopicsReducer from "./userTopicsReducer"
import notificationsReducer from "./notificationsReducer"
import scrollIdReducer from "./scrollIdReducer"
import bottomPopUpReducer from "./bottomPopUpReducer"
import draftsReducer from "./draftsReducer"

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
    sections: sectionsReducer,
    subsections: subsectionsReducer,
    topics: topicsReducer,
    posts: postsReducer,
    userTopics: userTopicsReducer,
    notifications: notificationsReducer,
    scrollId: scrollIdReducer,
    bottomPopUp: bottomPopUpReducer,
    drafts: draftsReducer,
})

export default rootReducer