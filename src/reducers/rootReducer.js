import appReducer from "./appReducer";

const rootReducer = (state, action) => {

    if (action.type === 'REMOVE_CURRENT_USER') {
        return appReducer(undefined, action)
    }

    return appReducer(state, action)

}

export default rootReducer