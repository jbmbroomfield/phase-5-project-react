import React from 'react'

import UserLink from 'react/sharedComponents/UserLink'
import TopicLink from 'react/sharedComponents/TopicLink'
import LastPost from './LastPost'

const TopicSummary = ({
    topic,
    postCount,
}) => {

    const lastPost = topic.attributes.last_post
    const firstPoster = topic.attributes.first_poster

    return (
        <div className="topic-summary">
            <div><TopicLink topic={topic} /></div>
            <div><UserLink user={firstPoster} /></div>
            <div>{postCount}</div>
            <div><LastPost lastPost={lastPost} /></div>
        </div>
    )
}

export default TopicSummary