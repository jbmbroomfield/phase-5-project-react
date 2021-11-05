import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'
import Post from '../components/Post'

import createSocket from '../createSocket'

import TrackVisibility from 'react-on-screen'
import { fetchUserTopic } from '../actions/userTopicsActions'
import { setScrollId } from '../actions/scrollIdActions'

import { setBottomPopUp } from '../actions/bottomPopUpActions'
import { setDraft, insertIntoDraft } from '../actions/draftsActions'
import { createFlag, deleteFlag } from '../actions/flagsActions'

const TopicContainer = ({
    match,
    subsections, topics, posts, users,
    fetchPosts,
    userTopics, fetchUserTopic,
    scrollId, setScrollId,
    setBottomPopUp,
    drafts, setDraft, insertIntoDraft,
    focusTextArea,
    createFlag, deleteFlag,
}) => {

    const topicId = parseInt(match.params.topicId)
    const topic = topics.find(topic => parseInt(topic.id) === topicId)

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

    posts = posts.filter(post => (
        parseInt(post.attributes.topic_id) === parseInt(topicId)
    ))

    const renderPosts = () => (
        posts.map(post => {
            const tag = post.attributes.tag
            const scrollTo = tag === scrollId
            console.log(post.attributes.public_flags.like.length)
            return <TrackVisibility key={post.id}>
                <Post
                    key={post.id}
                    id={post.id}
                    user={post.attributes && getUser(post.attributes.user_id)}
                    text={post.attributes && post.attributes.text}
                    tag={tag}
                    createdAt={post.attributes && post.attributes.created_at}
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
    scrollId: state.scrollId,
    drafts: state.drafts,
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
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)