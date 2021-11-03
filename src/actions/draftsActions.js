export const setDraft = (topicId, text ,selection) => ({
    type: 'SET_DRAFT',
    topicId,
    text,
    selection
})

export const insertIntoDraft = (topicId, text) => ({
    type: 'INSERT_INTO_DRAFT',
    topicId,
    text
})

export const unfocusDraft = topicId => ({
    type: 'UNFOCUS_DRAFT',
    topicId
})

export const deleteDraft = topicId => ({
    type: 'DELETE_DRAFT',
    topicId
})