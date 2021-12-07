import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import TrackVisibility from 'react-on-screen'

import Post from '../components/Post'
import UnpublishedPost from '../components/UnpublishedPost'

import { fetchPosts, fetchPost } from 'redux/actions/postsActions'
import { fetchUserTopic } from 'redux/actions/userTopicsActions'
import { insertIntoDraft } from 'redux/actions/draftsActions'
import { createFlag, deleteFlag } from 'redux/actions/flagsActions'
import { setPages, setPage } from 'redux/actions/topicDisplaysActions'
import { setScrollId } from 'redux/actions/scrollIdActions'
import { fetchTopic } from 'redux/actions/topicsActions'
import { editTopic } from 'redux/actions/topicsActions'

import topicChannel from '../../../channels/topicChannel'

import filterPosts from 'filterPosts'
import getTopicDisplay from 'getTopicDisplay'
import { Link } from 'react-router-dom'
// import TopicLink from 'react/sharedComponents/TopicLink'
import SubsectionLink from 'react/sharedComponents/SubsectionLink'

const TopicContainer = ({
    match,
    focusTextArea,
}) => {

    const dispatch = useDispatch()

    const history = useHistory()
    
    const subsections = useSelector(state => state.subsections)
    const topics = useSelector(state => state.topics)
    const posts = useSelector(state => state.posts)
    const users = useSelector(state => state.users)
    const drafts = useSelector(state => state.drafts)
    const topicDisplays = useSelector(state => state.topicDisplays)
    const currentUser = useSelector(state => state.currentUser)
    const scrollId = useSelector(state => state.scrollId)

    const currentUserAttributes = currentUser && currentUser.attributes ? currentUser.attributes : {}

    const timezone = currentUserAttributes.time_zone

    const subsectionSlug = match.params.subsectionSlug
    const subsection = subsections.find(subsection => subsection.attributes?.slug === subsectionSlug)
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
        dispatch(insertIntoDraft(topicId, text))
    }

    useEffect(() => {
        const errorRedirect = () => history.push('/')
        dispatch(fetchTopic(subsectionSlug, topicSlug, errorRedirect))
        dispatch(fetchPosts(subsectionSlug, topicSlug))
        dispatch(fetchUserTopic(subsectionSlug, topicSlug))
        const fetchPostFunc = postId => dispatch(fetchPost(postId))
        const fetchTopicFunc = (subsectionSlug, topicSlug) => dispatch(fetchTopic(subsectionSlug, topicSlug))
        return topicChannel(subsectionSlug, topicSlug, fetchPostFunc, fetchTopicFunc)
    }, [dispatch, subsectionSlug, topicSlug, history])

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
        topicDisplay.pages && dispatch(setPages(topicSlug, topicDisplay.pages))
        topicDisplay.page && dispatch(setPage(topicSlug, topicDisplay.page))
    }, [dispatch, topicSlug, topicDisplay.pages, topicDisplay.page])
    

    const renderPosts = () => {
        if (topicAttributes.status === 'unpublished') {
            return <UnpublishedPost
                guestAccess={topicAttributes.guest_access}
                whoCanView={topicAttributes.who_can_view}
                whoCanPost={topicAttributes.who_can_post}
            />
        }
        return filteredPosts.map(post => {
            const tag = post.attributes.tag
            const scrollTo = tag === scrollId
            const postAttributes = post.attributes
            return <TrackVisibility key={post.id}>
                <Post
                    key={post.id}
                    id={post.id}
                    user={postAttributes && getUser(postAttributes.user_id)}
                    text={postAttributes && postAttributes.text}
                    tag={tag}
                    createdAt={postAttributes && postAttributes.created_at_s}
                    insertText={insertText}
                    scrollTo={scrollTo}
                    setScrollId={scrollId => dispatch(setScrollId(scrollId))}
                    focusTextArea={focusTextArea}
                    draft={draft}
                    my_flags={postAttributes && postAttributes.my_flags}
                    publicFlags={postAttributes && postAttributes.public_flags}
                    createFlag={category => dispatch(createFlag(topicId, post.id, category))}
                    deleteFlag={category => dispatch(deleteFlag(topicId, post.id, category))}
                    timezone={timezone}
                    canPost={topicAttributes.can_post}
                    guestName={postAttributes.guest_name}
                />
        </TrackVisibility>
        })
    }


    const editTitle = event => {
        const title = event.target.value
        if (title.length > 0) {
            dispatch(editTopic(subsectionSlug, topicSlug, {title}))
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
            <br />
            <Link to='/'>
                Home
            </Link>
            { subsection && <>{' > '}<SubsectionLink subsection={subsection} /></> }
            {/* { topic && <>{' >  '}<TopicLink topic={topic} /></>} */}

            <h1>{topicAttributes.title}</h1>
            { topicAttributes.status === 'unpublished' && renderEditTitle() }
            { renderPosts() }
        </>
    )
}

export default TopicContainer