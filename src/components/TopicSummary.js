import React from 'react'
import { Link } from 'react-router-dom'
import UserLink from './UserLink'
import TopicLink from './TopicLink'

const TopicSummary = ({
    topic,
    postCount,
    goToPost,
}) => {

    const topicId = topic.id
    const title = topic.attributes.title
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
            <>
                <strong>{lastPost.created_at_s}</strong>{renderGreenArrow()}<br />
                by <UserLink user={lastPoster} />
            </>
        )
    }

    return (
        <div className="topic-summary">
            <div><TopicLink topic={topic} /></div>
            <div><UserLink user={firstPoster} /></div>
            <div>{postCount}</div>
            <div>
                { renderLastPost() }
            </div>
        </div>
    )
}

export default TopicSummary