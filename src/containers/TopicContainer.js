import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts, fetchPost } from '../actions/postsActions'
import Post from '../components/Post'

import TrackVisibility from 'react-on-screen'
import { fetchUserTopic } from '../actions/userTopicsActions'

import { insertIntoDraft } from '../actions/draftsActions'
import { createFlag, deleteFlag } from '../actions/flagsActions'
import { setScrollId, setTopicDisplay } from '../actions/topicDisplayActions'

import topicChannel from '../channels/topicChannel'
import { fetchTopic } from '../actions/topicsActions'

const TopicContainer = ({
    match,
    focusTextArea,
    
    topics,
    posts,
    users,
    drafts,
    topicDisplay,
    currentUser,

    fetchTopic, fetchUserTopic,
    fetchPosts, fetchPost,
    setTopicDisplay,
    setScrollId,
    insertIntoDraft,
    createFlag, deleteFlag,
}) => {

    const topicId = parseInt(match.params.topicId)
    const topic = topics.find(topic => parseInt(topic.id) === topicId)
    const pageSize = (currentUser && currentUser.attributes && currentUser.attributes.page_size) || 25
    const scrollId = topicDisplay.scrollId

    if (topicDisplay.topicId !== topicId) {
        topicDisplay = {
            topicId: topicId,
            page: 1,
            pages: null,
            scrollId: scrollId,
            users: {
                exclude: [],
                include: null,
            },
            flags: {
                exclude: [],
                include: [],
            },
        }
    }


    const draft = drafts.find(
        draft => parseInt(draft.attributes.topic_id) === topicId
    )

    const insertText = text => {
        insertIntoDraft(topicId, text)
    }

    useEffect(() => {
        fetchTopic(topicId)
        fetchPosts(topicId)
        fetchUserTopic(topicId)
        return topicChannel(topicId, fetchPost)
    }, [fetchTopic, fetchPosts, fetchPost, fetchUserTopic, topicId])

    const getUser = userId => users.find(user => parseInt(user.id) === parseInt(userId))

    // DETERMINING WHICH POSTS TO SHOW

    const topicPosts = posts.filter(post => (
        parseInt(post.attributes.topic_id) === parseInt(topicId)
    ))

    const exclude = !!topicDisplay.users.exclude
    const array = exclude ? topicDisplay.users.exclude : topicDisplay.users.include
    const userIdArray = array.map(
        username => parseInt(users.find(user => user.attributes.username === username)?.id)
    )
    const filterPosts = [...topicPosts.filter(
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
    )]


    if (scrollId) {
        const scrollPostIndex = filterPosts.findIndex(post => post.attributes.tag === scrollId)
        if (scrollPostIndex > -1) {
            topicDisplay.page = Math.floor(scrollPostIndex / pageSize) + 1
        }
    }



    const page = topicDisplay.page
    topicDisplay.pages = Math.floor(filterPosts.length / pageSize) + 1

    let pagePosts = [...filterPosts]

    if (page !== 'all') {
        pagePosts = pagePosts.slice(pageSize * (page - 1), pageSize * page)
    }

    useEffect(() => {
        setTopicDisplay({
            topicId: topicDisplay.topicId,
            page: topicDisplay.page,
            pages: topicDisplay.pages,
            users: topicDisplay.users,
            flags: topicDisplay.flags,
        })
    }, [setTopicDisplay, topicDisplay.topicId, topicDisplay.page, topicDisplay.pages, topicDisplay.scrollId, topicDisplay.users, topicDisplay.flags,])

    const renderPosts = () => (
        pagePosts.map(post => {
            const tag = post.attributes.tag
            const scrollTo = tag === scrollId
            return <TrackVisibility key={post.id}>
                <Post
                    key={post.id}
                    id={post.id}
                    user={post.attributes && getUser(post.attributes.user_id)}
                    text={post.attributes && post.attributes.text}
                    tag={tag}
                    createdAt={post.attributes && post.attributes.created_at_s}
                    insertText={insertText}
                    scrollTo={scrollTo}
                    setScrollId={setScrollId}
                    focusTextArea={focusTextArea}
                    draft={draft}
                    my_flags={post.attributes && post.attributes.my_flags}
                    publicFlags={post.attributes && post.attributes.public_flags}
                    createFlag={category => createFlag(topicId, post.id, category)}
                    deleteFlag={category => deleteFlag(topicId, post.id, category)}
                />
        </TrackVisibility>
        })
    )

    return (
        <>
            <h1>{topic && topic.attributes.title}</h1>
            { renderPosts() }
        </>
    )
}

const mapStateToProps = state => ({
    topics: state.topics,
    posts: state.posts,
    users: state.users,
    drafts: state.drafts,
    topicDisplay: state.topicDisplay,
    currentUser: state.currentUser,
})

const mapDispatchToProps = {
    fetchTopic, fetchUserTopic,
    fetchPosts, fetchPost,
    setTopicDisplay,
    setScrollId,
    insertIntoDraft,
    createFlag, deleteFlag,
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)