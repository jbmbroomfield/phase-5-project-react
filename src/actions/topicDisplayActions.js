export const resetTopicDisplay = () => ({
    type: 'RESET_TOPIC_DISPLAY'
})

export const setTopicDisplay = topicDisplay => ({
    type: 'SET_TOPIC_DISPLAY',
    topicDisplay
})

export const setPage = page => ({
    type: 'SET_PAGE',
    page
})

export const setPages = pages => ({
    type: 'SET_PAGES',
    pages
})

export const setScrollId = scrollId => ({
    type: 'SET_SCROLL_ID',
    scrollId
})

export const toggleUserFilter = user => ({
    type: 'TOGGLE_USER_FILTER',
    user
})

export const excludeAllUsers = () => ({
    type: 'EXCLUDE_ALL_USERS'
})

export const includeAllUsers = () => ({
    type: 'INCLUDE_ALL_USERS'
})

export const toggleFlagFilter = flag => ({
    type: 'TOGGLE_FLAG_FILTER',
    flag
})