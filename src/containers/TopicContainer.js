import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'
import BottomPadding from '../components/BottomPadding'
import Post from '../components/Post'
import TopicReplyContainer from './TopicReplyContainer'

import createSocket from '../createSocket'

const TopicContainer = ({
    match,
    subsections, topics, posts, users,
    fetchPosts,
}) => {

    const [displayTextArea, setDisplayTextArea] = useState(false)
    const [text, setText] = useState('')
    const [selection, setSelection] = useState([0, 0])

    const topicId = match.params.topicId
    const topic = topics.find(topic => parseInt(topic.id) === parseInt(topicId))

    useEffect(() => {
        const params = {
            channel: "TopicChannel",
            topic_id: topicId,
        }
        const onUpdate = () => fetchPosts(topicId)
        const socket = createSocket(params, onUpdate)
        return () => socket.close(1000)
    }, [fetchPosts, topicId])

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
        setDisplayTextArea(true)
        const beginning = text.slice(0, selection[0])
        const end = text.slice(selection[1])
        setText(beginning + newText + end)

    }

    return (
        <div>
            <main>
                <h1>Topic - {topic && topic.attributes.title}</h1>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        id={post.id}
                        user={getUser(post.attributes.user_id)}
                        text={post.attributes.text}
                        tag={post.attributes.tag}
                        createdAt={post.attributes.created_at}
                        insertText={insertText}
                    />
                ))}
            </main>
            <BottomPadding displayTextArea={displayTextArea} />
            <TopicReplyContainer
                topicId={topicId}
                displayTextArea={displayTextArea}
                setDisplayTextArea={setDisplayTextArea}
                text={text}
                setText={setText}
                selection={selection}
                setSelection={setSelection}
                handleButtonClick={handleButtonClick}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    sections: state.sections,
    subsections: state.subsections,
    topics: state.topics,
    posts: state.posts,
    users: state.users,
})

const mapDispatchToProps = dispatch => ({
    fetchPosts: topicId => dispatch(fetchPosts(topicId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)