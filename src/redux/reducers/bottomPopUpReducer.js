const bottomPopUpReducer = (state = false, action) => {
    switch(action.type) {

        case 'SET_BOTTOM_POP_UP':
            return action.bottomPopUp
        
        default:
            return state

    }
}

export default bottomPopUpReducer