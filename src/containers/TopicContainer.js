import React from 'react'
import { connect } from 'react-redux'

const TopicContainer = ({ match, subsections, topics }) => {
    const topicId = match.params.topicId
    const topic = topics.find(topic => parseInt(topic.id) === parseInt(topicId))

    return (
        <div>
            <h1>Topic - {topic && topic.attributes.title}</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    sections: state.sections,
    subsections: state.subsections,
    topics: state.topics
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)