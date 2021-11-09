import React from 'react'

import TopicSummary from '../components/TopicSummary'

const TopicSummaryContainer = ({ topic }) => {

    const attributes = topic.attributes
    const lastPost = attributes.last_post
    const firstPoster = attributes.first_poster

    return (
        <div className="topic-summary">
            <TopicSummary
                topicId={topic.id}
                title={attributes.title}
                lastPostTimeS={lastPost.created_at_s}
                lastPostTag={lastPost.tag}
                lastPosterId={lastPost.user.id}
                lastPoster={lastPost.user.attributes.username}
                postCount={attributes.post_count}
                firstPosterId={firstPoster.id}
                firstPoster={firstPoster.attributes.username}
            />
        </div>
    )
}

export default TopicSummaryContainer