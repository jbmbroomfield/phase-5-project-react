import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const SubsectionContainer = ({ match, subsections, topics }) => {
    const subsectionId = match.params.subsectionId
    const subsection = subsections.find(subsection => parseInt(subsection.id) === parseInt(subsectionId))
    topics = topics.filter(topic => parseInt(topic.attributes.subsection_id) === parseInt(subsectionId))

    return (
        <div>
            <h1>Subsection - {subsection && subsection.attributes.title}</h1>
            {topics.map(topic => (
                <p key={topic.id}>
                    <Link to={`/topics/${topic.id}`}>
                        {topic.attributes.title}
                    </Link>
                </p>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    subsections: state.subsections,
    topics: state.topics
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SubsectionContainer)