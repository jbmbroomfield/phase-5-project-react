import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'
import Post from '../components/Post'

import createSocket from '../createSocket'

import TrackVisibility from 'react-on-screen'
import { fetchUserTopic } from '../actions/userTopicsActions'

import { setBottomPopUp } from '../actions/bottomPopUpActions'
import { setDraft, insertIntoDraft } from '../actions/draftsActions'
import { createFlag, deleteFlag } from '../actions/flagsActions'
import { resetTopicDisplay, setPages, setScrollId, setPage, setTopicDisplay } from '../actions/topicDisplayActions'

const TopicContainer = ({
    match,
    subsections, topics, posts, users,
    fetchPosts,
    userTopics, fetchUserTopic,
    setScrollId,
    setBottomPopUp,
    drafts, setDraft, insertIntoDraft,
    focusTextArea,
    createFlag, deleteFlag,
    topicDisplay, setPages, setPage, setTopicDisplay,
    currentUser,
}) => {

    const topicId = parseInt(match.params.topicId)
    const topic = topics.find(topic => parseInt(topic.id) === topicId)
    // const page = topicDisplay.page
    const pageSize = (currentUser && currentUser.attributes && currentUser.attributes.page_size) || 25
    const scrollId = topicDisplay.scrollId

    if (topicDisplay.topicId !== topicId) {
        topicDisplay = {
            topicId: topicId,
            page: 1,
            pages: null,
            scrollId: scrollId,
            users: {},
            flags: {},
        }
    }

    // topicDisplay = {
    //     topicId: null,
    //     page: 1,
    //     pages: null,
    //     scrollId: null,
    //     users: {},
    //     flags: {},
    // }


    const draft = drafts.find(
        draft => parseInt(draft.attributes.topic_id) === topicId
    )

    const insertText = text => {
        insertIntoDraft(topicId, text)
    }

    useEffect(() => {
        const params = {
            channel: "TopicChannel",
            topic_id: topicId,
        }
        const onUpdate = () => {
            fetchPosts(topicId)
            fetchUserTopic(topicId)
        }
        const socket = createSocket(params, onUpdate)
        return () => socket.close(1000)
    }, [fetchPosts, fetchUserTopic, topicId, setBottomPopUp])

    const getUser = userId => users.find(user => parseInt(user.id) === parseInt(userId))



    // DETERMINING WHICH POSTS TO SHOW

    const topicPosts = posts.filter(post => (
        parseInt(post.attributes.topic_id) === parseInt(topicId)
    ))

    const filterPosts = [...topicPosts]

    // let correctPage = page

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


    // END 

    useEffect(() => {
        console.log('usingEffect')
        console.log(topicDisplay.pages)
        setTopicDisplay({
            topicId: topicDisplay.topicId,
            page: topicDisplay.page,
            pages: topicDisplay.pages,
            // scrollId: topicDisplay.scrollId,
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
            <h1>Topic - {topic && topic.attributes.title}</h1>
            { renderPosts() }
        </>
    )
}

const mapStateToProps = state => ({
    sections: state.sections,
    subsections: state.subsections,
    topics: state.topics,
    posts: state.posts,
    users: state.users,
    userTopics: state.userTopics,
    drafts: state.drafts,
    topicDisplay: state.topicDisplay,
    currentUser: state.currentUser,
})

const mapDispatchToProps = dispatch => ({
    fetchPosts: topicId => dispatch(fetchPosts(topicId)),
    fetchUserTopic: topicId => dispatch(fetchUserTopic(topicId)),
    setScrollId: id => dispatch(setScrollId(id)),
    setBottomPopUp: bottomPopUp => dispatch(setBottomPopUp(bottomPopUp)),
    setDraft: (topicId, text, selection) => dispatch(setDraft(topicId, text, selection)),
    insertIntoDraft: (topicId, text) => dispatch(insertIntoDraft(topicId, text)),
    createFlag: (topicId, postId, category) => dispatch(createFlag(topicId, postId, category)),
    deleteFlag: (topicId, postId, category) => dispatch(deleteFlag(topicId, postId, category)),
    setPage: page => dispatch(setPage(page)),
    setPages: pages => dispatch(setPages(pages)),
    setTopicDisplay: topicDisplay => dispatch(setTopicDisplay(topicDisplay)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)