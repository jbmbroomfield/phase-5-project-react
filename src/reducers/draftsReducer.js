const draftsReducer = (state = [], action) => {

    let newState, draft

    switch(action.type) {

        case 'SET_DRAFT':
            return [
                ...removeDraft(state, action.topicId),
                newDraft(action.topicId, action.text, action.selection)
            ]
        
        case 'INSERT_INTO_DRAFT':
            newState = [...state]
            draft = newState.find(
                draft => draft.attributes && parseInt(draft.attributes.topic_id) === action.topicId
            )
            if (draft) {
                const text = draft.attributes.text
                const selection = draft.attributes.selection
                const beginning = text.slice(0, selection[0])
                const end = text.slice(selection[1])
                draft.attributes.text = beginning + action.text + end
                const newSelection = beginning.length + action.text.length
                draft.attributes.selection = [newSelection, newSelection]
                draft.attributes.focus = true
            } else {
                newState = [...newState, newDraft(action.topicId, action.text, [action.text.length, action.text.length])]
            }
            return newState

        case 'UNFOCUS_DRAFT':
            newState = [...state]
            draft = newState.find(
                draft => draft.attributes && parseInt(draft.attributes.topic_id) === action.topicId
            )
            if (draft) {
                draft.attributes.focus = false
            }
            return newState

        case 'DELETE_DRAFT':
            return removeDraft(action.topicId)

        default:
            return state

    }
}

const removeDraft = (state, topicId) => (
    state.filter(draft => (
        parseInt(draft.attributes.topic_id) !== topicId
    ))
)

const newDraft = (topicId, text, selection) => ({
    type: 'draft',
    attributes: {
        topic_id: topicId,
        text,
        selection: selection || [text.length, text.length],
        focus: true,
    }
})

export default draftsReducer