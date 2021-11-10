import React from 'react'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'

import { setScrollId } from '../actions/topicDisplayActions'

import TopicSummary from '../components/TopicSummary'

const TopicSummaryContainer = ({ topic, setScrollId }) => {

    const attributes = topic.attributes
    const lastPost = attributes.last_post
    const firstPoster = attributes.first_poster

    const history = useHistory()

    const goToLastPost = () => {
        setScrollId(lastPost.tag)
        history.push(`/topics/${topic.id}`)
    }

    return (
        <div className="topic-summary">
            <TopicSummary
                topicId={topic.id}
                title={attributes.title}
                lastPostTimeS={lastPost.created_at_s}
                lastPosterId={lastPost.user.id}
                lastPoster={lastPost.user.attributes.username}
                postCount={attributes.post_count}
                firstPosterId={firstPoster.id}
                firstPoster={firstPoster.attributes.username}
                goToLastPost={goToLastPost}
            />
        </div>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    setScrollId
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicSummaryContainer)