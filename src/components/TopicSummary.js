import React from 'react'
import { Link } from 'react-router-dom'

const TopicSummary = ({
    topicId,
    title,
    lastPostTimeS, lastPostTag,
    postCount,
    firstPoster, firstPosterId,
    lastPoster, lastPosterId,
}) => {

    const renderTitle = () => {
        return (
            <Link to={`/topics/${topicId}`}>
                {title}
            </Link>
        )
    }

    const renderLastPost = () => {
        return (
            <>
                <strong>{lastPostTimeS}</strong><br />
                by {lastPoster}
            </>
        )
    }

    return (
        <>
            <div>
                { renderTitle() }
            </div>
            <div>{firstPoster}</div>
            <div>{postCount}</div>
            <div>
                { renderLastPost() }
            </div>
        </>
    )
}

export default TopicSummary