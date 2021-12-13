import React from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react/sharedComponents/Spinner'
import LastPost from './LastPost'

const SubsectionSummary = ({
    subsection
}) => {
    if (!subsection) {
        return null
    }

    const attributes = subsection.attributes
    const topicCount = attributes.topic_count || <Spinner />
    const postCount = attributes.post_count || <Spinner />
    const lastPost = attributes.last_post ? <div><LastPost lastPost={attributes.last_post} showTopic={true} /></div> : <Spinner />

    return (
        <div className="subsection-summary">
            <div>
                <Link to={`forum/${subsection.attributes.slug}`}>
                    {subsection.attributes.title}
                </Link>
            </div>
            <div>{topicCount}</div>
            <div>{postCount}</div>
            <div>{lastPost}</div>
        </div>
    )
}

export default SubsectionSummary