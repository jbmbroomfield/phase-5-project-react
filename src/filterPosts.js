const filterByFlagsAndUsers = (
    posts,
    topicDisplay,
    users,
) => {
    const exclude = !!topicDisplay.users.exclude
    const array = exclude ? topicDisplay.users.exclude : topicDisplay.users.include
    const userIdArray = array.map(
        username => parseInt(users.find(user => user.attributes.username === username)?.id)
    )
    return posts.filter(
        post => {

            const flagsInclude = topicDisplay.flags.include
            const flagsExclude = topicDisplay.flags.exclude

            const myFlags = post.attributes.my_flags
            let excludedFlag = false, includedFlag = false
            if (myFlags.includes('like')) {
                if (flagsInclude.includes('like')) {
                    includedFlag = true
                } else if (flagsExclude.includes('like')) {
                    excludedFlag = true
                }
            } else if (myFlags.includes('dislike')) {
                if (flagsInclude.includes('dislike')) {
                    includedFlag = true
                } else if (flagsExclude.includes('dislike')) {
                    excludedFlag = true
                }
            } else {
                if (flagsInclude.includes('nonlike')) {
                    includedFlag = true
                } else if (flagsExclude.includes('nonlike')) {
                    excludedFlag = true
                }
            }

            if (exclude && includedFlag) {
                return true
            }
            if (!exclude && excludedFlag) {
                return false
            }
            if (includedFlag) {
                return true
            }
            if (excludedFlag) {
                return false
            }

            const userId = parseInt(post.attributes.user_id)
            const userPresent = userIdArray.includes(userId)
            return exclude !== userPresent
        }
    )
}

const filterPosts = (
    posts,
    topicSlug,
    topicDisplay,
    users,
    scrollId,
    pageSize,
    setPages, setPage,
) => {
    const topicPosts = posts.filter(post => (
        post.attributes.topic_slug === topicSlug
    )).sort((a, b) => (
        parseInt(a.id) - parseInt(b.id)
    ))
    const filteredPosts = filterByFlagsAndUsers(
        topicPosts,
        topicDisplay,
        users,
    )
    
    if (scrollId) {
        const scrollPostIndex = filteredPosts.findIndex(post => post.attributes.tag === scrollId)
        if (scrollPostIndex > -1) {
            topicDisplay.page = Math.floor(scrollPostIndex / pageSize) + 1
        } 
    }

    topicDisplay.page = topicDisplay.page || 1

    const page = topicDisplay.page
    topicDisplay.pages = Math.floor(filteredPosts.length / pageSize) + 1

    let pagePosts = [...filteredPosts]

    if (page !== 'all') {
        pagePosts = pagePosts.slice(pageSize * (page - 1), pageSize * page)
    }
    return pagePosts
}

export default filterPosts