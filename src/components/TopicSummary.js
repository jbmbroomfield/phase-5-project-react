import React from 'react'
import { Link } from 'react-router-dom'
import UserLink from './UserLink'

const TopicSummary = ({
    topicId,
    title,
    lastPostTimeS,
    postCount,
    firstPoster, firstPosterId,
    lastPoster, lastPosterId,
    goToLastPost,
}) => {

    const renderTitle = () => {
        return (
            <Link to={`/topics/${topicId}`}>
                {title}
            </Link>
        )
    }

    const renderGreenArrow = () => (
        <i
            className="fa fa-arrow-right clickable"
            style={{color: 'green'}}
            onClick={goToLastPost}
        ></i>
    )

    const renderLastPost = () => {
        return (
            <>
                <strong>{lastPostTimeS}</strong>{renderGreenArrow()}<br />
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