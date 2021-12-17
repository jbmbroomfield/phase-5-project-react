import React from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react/sharedComponents/Spinner'
import LastPost from './LastPost'

const SubsectionSummary = ({
    subsection, currentUser
}) => {
    if (!subsection || !currentUser) {
        return null
    }

    const currentUserAttributes = currentUser && currentUser.attributes ? currentUser.attributes : {}
    const showIgnored = currentUser && currentUserAttributes.show_ignored

    const subsectionAttributes = subsection ? subsection.attributes : {}
    const topicCount = showIgnored ? subsectionAttributes.topic_count : subsectionAttributes.unignored_topic_count
    const postCount = showIgnored ? subsectionAttributes.post_count : subsectionAttributes.unignored_post_count
    const lastPost = showIgnored ? subsectionAttributes.last_post : subsectionAttributes.last_unignored_post
    const renderLastPost = () => {
        if (!lastPost) return <Spinner />
        if (!lastPost.id) return null
        return <div><LastPost lastPost={lastPost} showTopic={true} /></div>
    }

    return <div className="subsection-summary">
        <div>
            <Link to={`forum/${subsection.attributes.slug}`}>
                {subsection.attributes.title}
            </Link>
        </div>
        <div>{topicCount === null ? <Spinner /> : Math.max(topicCount, 0)}</div>
        <div>{postCount === null ? <Spinner /> : Math.max(postCount, 0)}</div>
        <div>{renderLastPost()}</div>
    </div>
}

export default SubsectionSummary