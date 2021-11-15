const initialTopicDisplay = slug => ({
    slug,
    page: null,
    pages: null,
    users: {
        exclude: [],
        include: null,
    },
    flags: {
        exclude: [],
        include: [],
    },
})

const getTopicDisplay = (topicDisplays, slug) => {
    let topicDisplay = topicDisplays.find(
        topicDisplay => topicDisplay.slug === slug
    )
    if (!topicDisplay) {
        topicDisplay = initialTopicDisplay(slug)
        topicDisplays.push(topicDisplay) 
    }
    return topicDisplay
}

export default getTopicDisplay
