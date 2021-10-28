import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'
import Post from '../components/Post'

const TopicContainer = ({
    match,
    subsections, topics, posts,
    fetchPosts,
}) => {
    const topicId = match.params.topicId
    const topic = topics.find(topic => parseInt(topic.id) === parseInt(topicId))

    useEffect(() => {
        fetchPosts(topicId)
    }, [fetchPosts, topicId])

    posts = posts.filter(post => (
        parseInt(post.attributes.topic_id) === parseInt(topicId)
    ))

    return (
        <div>
            <h1>Topic - {topic && topic.attributes.title}</h1>
            {posts.map(post => (
                <Post
                    key={post.id}
                    text={post.attributes.text}
                />
            ))}

        </div>
    )
}

const mapStateToProps = state => ({
    sections: state.sections,
    subsections: state.subsections,
    topics: state.topics,
    posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
    fetchPosts: topicId => dispatch(fetchPosts(topicId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)