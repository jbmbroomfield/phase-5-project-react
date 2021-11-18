import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchPosts, fetchPost } from '../actions/postsActions'
import Post from '../components/Post'

import TrackVisibility from 'react-on-screen'
import { fetchUserTopic } from '../actions/userTopicsActions'

import { insertIntoDraft } from '../actions/draftsActions'
import { createFlag, deleteFlag } from '../actions/flagsActions'
import { setPages, setPage } from '../actions/topicDisplaysActions'
import { setScrollId } from '../actions/scrollIdActions'

import topicChannel from '../channels/topicChannel'
import { fetchTopic } from '../actions/topicsActions'
import filterPosts from '../filterPosts'

import getTopicDisplay from '../getTopicDisplay'
import UnpublishedPost from '../components/UnpublishedPost'

import { editTopic } from '../actions/topicsActions'

const TopicContainer = ({
    match,
    focusTextArea,
    
    subsections,
    topics,
    posts,
    users,
    drafts,
    topicDisplays,
    currentUser,
    scrollId,

    fetchTopic, fetchUserTopic,
    fetchPosts, fetchPost,
    setTopicDisplay,
    setScrollId,
    insertIntoDraft,
    createFlag, deleteFlag,
    setPages, setPage,
    editTopic,
}) => {


    const timezone = currentUser?.attributes.time_zone

    const subsectionSlug = match.params.subsectionSlug
    // const subsection = subsections.find(subsection => subsection.attributes?.slug === subsectionSlug)
    const topicSlug = match.params.topicSlug
    const topic = topics.find(topic => {
        if (!topic.attributes) {
            return null
        }
        return topic.attributes.slug === topicSlug && topic.attributes.subsection_slug === subsectionSlug
    })
    const topicId = topic && parseInt(topic.id)
    const pageSize = (currentUser && currentUser.attributes && currentUser.attributes.page_size) || 25

    const topicAttributes = topic ? topic.attributes : {}

    const [titleInput, setTitleInput] = useState('')

    const draft = drafts.find(
        draft => parseInt(draft.attributes.topic_id) === topicId
    )

    const insertText = text => {
        insertIntoDraft(topicId, text)
    }

    useEffect(() => {
        fetchTopic(subsectionSlug, topicSlug)
        fetchPosts(subsectionSlug, topicSlug)
        fetchUserTopic(subsectionSlug, topicSlug)
        return topicChannel(subsectionSlug, topicSlug, fetchPost, fetchTopic)
    }, [fetchTopic, subsectionSlug, topicSlug, fetchPosts, fetchPost, fetchUserTopic, topicId])

    const getUser = userId => users.find(user => parseInt(user.id) === parseInt(userId))

    const topicDisplay = getTopicDisplay(topicDisplays, topicSlug)

    const filteredPosts = filterPosts(
        posts,
        topicSlug,
        topicDisplay,
        users,
        scrollId,
        pageSize,
    )

    useEffect(() => {
        topicDisplay.pages && setPages(topicSlug, topicDisplay.pages)
        topicDisplay.page && setPage(topicSlug, topicDisplay.page)
    }, [setPages, setPage, topicSlug, topicDisplay.pages, topicDisplay.page])
    

    const renderPosts = () => {
        if (topicAttributes.status === 'unpublished') {
            return <UnpublishedPost
                whoCanView={topicAttributes.who_can_view}
                whoCanPost={topicAttributes.who_can_post}
            />
        }
        return filteredPosts.map(post => {
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
                    timezone={timezone}
                />
        </TrackVisibility>
        })
    }


    const editTitle = event => {
        const title = event.target.value
        if (title.length > 0) {
            editTopic(subsectionSlug, topicSlug, {title: event.target.value})
        }
    }

    const handleTitleInputChange = event => {
        const title = event.target.value
        if (title.length <= 32) {
            setTitleInput(title)
        }
    }

    const renderEditTitle = () => {
        return <input
            type="text"
            value={titleInput}
            onChange={handleTitleInputChange}
            onBlur={editTitle}
            placeholder={'Choose a title'}
        />
    }

    if (!topic) {
        return null
    }
    return (
        <>
            <h1>{topicAttributes.title}</h1>
            { topicAttributes.status === 'unpublished' && renderEditTitle() }
            { renderPosts() }
        </>
    )
}

const mapStateToProps = state => ({
    subsections: state.subsections,
    topics: state.topics,
    posts: state.posts,
    users: state.users,
    drafts: state.drafts,
    topicDisplays: state.topicDisplays,
    currentUser: state.currentUser,
    scrollId: state.scrollId
})

const mapDispatchToProps = {
    fetchTopic, fetchUserTopic,
    fetchPosts, fetchPost,
    // setTopicDisplay,
    setScrollId,
    insertIntoDraft,
    createFlag, deleteFlag,
    setPages, setPage,
    editTopic,
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)