import { combineReducers } from "redux"

import currentUserReducer from "./currentUserReducer"
import usersReducer from "./usersReducer"
import sectionsReducer from './sectionsReducer'
import subsectionsReducer from "./subsectionsReducer"
import topicsReducer from './topicsReducer'
import postsReducer from "./postsReducer"
import userTopicsReducer from "./userTopicsReducer"
import notificationsReducer from "./notificationsReducer"
import bottomPopUpReducer from "./bottomPopUpReducer"
import draftsReducer from "./draftsReducer"
import topicDisplayReducer from "./topicDisplayReducer"

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
    sections: sectionsReducer,
    subsections: subsectionsReducer,
    topics: topicsReducer,
    posts: postsReducer,
    userTopics: userTopicsReducer,
    notifications: notificationsReducer,
    bottomPopUp: bottomPopUpReducer,
    drafts: draftsReducer,
    topicDisplay: topicDisplayReducer
})

export default rootReducer