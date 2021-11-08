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

export const includeUser = user => ({
    type: 'INCLUDE_USER',
    user
})

export const excludeUser = user => ({
    type: 'EXCLUDE_USER',
    user
})