import addOrUpdate from './addOrUpdate'

const subsectionsReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_SUBSECTIONS':
            return addOrUpdate(state, action.subsections)

        default:
            return state

    }

}

export default subsectionsReducer