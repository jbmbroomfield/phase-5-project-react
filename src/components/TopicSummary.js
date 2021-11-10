import React from 'react'
import UserLink from './UserLink'
import TopicLink from './TopicLink'

const TopicSummary = ({
    topic,
    postCount,
    goToPost,
}) => {

    const topicId = topic.id
    const lastPost = topic.attributes.last_post
    const lastPoster = lastPost.user
    const firstPoster = topic.attributes.first_poster

    const renderGreenArrow = () => (
        <i
            className="fa fa-arrow-right clickable"
            style={{color: 'green'}}
            onClick={() => goToPost(topicId, lastPost.tag)}
        ></i>
    )

    const renderLastPost = () => {
        return (
            <div>
                <strong>{lastPost.created_at_s}</strong>{renderGreenArrow()}<br />
                by <UserLink user={lastPoster} />
            </div>
        )
    }

    return (
        <div className="topic-summary">
            <div><TopicLink topic={topic} /></div>
            <div><UserLink user={firstPoster} /></div>
            <div>{postCount}</div>
            { renderLastPost() }
        </div>
    )
}

export default TopicSummary