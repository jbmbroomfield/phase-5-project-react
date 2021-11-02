import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'
import Post from '../components/Post'
import TopicReplyContainer from './TopicReplyContainer'

import createSocket from '../createSocket'

import TrackVisibility from 'react-on-screen'
import { fetchUserTopic } from '../actions/userTopicsActions'
import { setScrollId } from '../actions/scrollIdActions'

import AsideLeftContainer from './AsideLeftContainer'
import AsideRightTopicContainer from './AsideRightTopicContainer'
import { setBottomPopUp } from '../actions/bottomPopUpActions'

const TopicContainer = ({
    match,
    subsections, topics, posts, users,
    fetchPosts,
    userTopics, fetchUserTopic,
    scrollId, setScrollId,
    setBottomPopUp,
}) => {

    const [displayTextArea, setDisplayTextArea] = useState(false)

    const setDisplayTextAreaAndBottomPopUp = bottomPopUp => {
        setDisplayTextArea(bottomPopUp)
        setBottomPopUp(bottomPopUp)
    }

    const [text, setText] = useState('')
    const [selection, setSelection] = useState([0, 0])

    const topicId = parseInt(match.params.topicId)
    const topic = topics.find(topic => parseInt(topic.id) === topicId)

    const userTopic = userTopics.find(
        userTopic => parseInt(userTopic.attributes.topic_id) === topicId
    )

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
    }, [fetchPosts, fetchUserTopic, topicId])

    const getUser = userId => users.find(user => parseInt(user.id) === parseInt(userId))

    posts = posts.filter(post => (
        parseInt(post.attributes.topic_id) === parseInt(topicId)
    ))

    const handleButtonClick = insert => {
        const [nextText, nextSelectionStart, nextSelectionEnd] = insert(text, selection[0], selection[1])
        setText(nextText)
        setSelection([nextSelectionStart, nextSelectionEnd])
    }

    const insertText = newText => {
        setDisplayTextAreaAndBottomPopUp(true)
        const beginning = text.slice(0, selection[0])
        const end = text.slice(selection[1])
        setText(beginning + newText + end)
    }

    const renderPosts = () => (
        posts.map(post => {
            const tag = post.attributes.tag
            const scrollTo = tag === scrollId
            return (
                <TrackVisibility key={post.id}>
                    <Post
                        key={post.id}
                        id={post.id}
                        user={getUser(post.attributes.user_id)}
                        text={post.attributes.text}
                        tag={tag}
                        createdAt={post.attributes.created_at}
                        insertText={insertText}
                        scrollTo={scrollTo}
                        setScrollId={setScrollId}
                    />
                </TrackVisibility>
            )
        })
    )

    return (
        <>
            <main>
                <h1>Topic - {topic && topic.attributes.title}</h1>
                {renderPosts()}
            </main>
            
            <AsideRightTopicContainer userTopic={userTopic} />
            <TopicReplyContainer
                topicId={topicId}
                displayTextArea={displayTextArea}
                setDisplayTextArea={setDisplayTextAreaAndBottomPopUp}
                text={text}
                setText={setText}
                selection={selection}
                setSelection={setSelection}
                handleButtonClick={handleButtonClick}
            />
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
})

const mapDispatchToProps = dispatch => ({
    fetchPosts: topicId => dispatch(fetchPosts(topicId)),
    fetchUserTopic: topicId => dispatch(fetchUserTopic(topicId)),
    setScrollId: id => dispatch(setScrollId(id)),
    setBottomPopUp: bottomPopUp => dispatch(setBottomPopUp(bottomPopUp))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)