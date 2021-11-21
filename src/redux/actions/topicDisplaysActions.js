export const resetTopicDisplay = () => ({
    type: 'RESET_TOPIC_DISPLAY'
})

// export const setTopicDisplay = topicDisplay => ({
//     type: 'SET_TOPIC_DISPLAY',
//     topicDisplay
// })

export const setPage = (slug, page) => ({
    type: 'SET_PAGE',
    slug,
    page
})

export const setPages = (slug, pages) => ({
    type: 'SET_PAGES',
    slug,
    pages
})

// export const setScrollId = scrollId => ({
//     type: 'SET_SCROLL_ID',
//     scrollId
// })

export const toggleUserFilter = (slug, user) => ({
    type: 'TOGGLE_USER_FILTER',
    slug,
    user
})

export const excludeAllUsers = slug => ({
    type: 'EXCLUDE_ALL_USERS',
    slug
})

export const includeAllUsers = slug => ({
    type: 'INCLUDE_ALL_USERS',
    slug
})

export const toggleFlagFilter = (slug, flag) => ({
    type: 'TOGGLE_FLAG_FILTER',
    slug,
    flag
})