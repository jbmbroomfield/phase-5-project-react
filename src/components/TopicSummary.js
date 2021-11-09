import React from 'react'
import { Link } from 'react-router-dom'
import UserLink from './UserLink'

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
                by <UserLink userId={lastPosterId} username={lastPoster} />
            </>
        )
    }

    return (
        <>
            <div>
                { renderTitle() }
            </div>
            <div><UserLink userId={firstPosterId} username={firstPoster} /></div>
            <div>{postCount}</div>
            <div>
                { renderLastPost() }
            </div>
        </>
    )
}

export default TopicSummary