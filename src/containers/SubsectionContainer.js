import React from 'react'
import { connect } from 'react-redux'

const SubsectionContainer = ({ match, sections, subsections, topics }) => {
    const subsectionId = match.params.subsectionId
    const subsection = subsections.find(subsection => parseInt(subsection.id) === parseInt(subsectionId))
    topics = topics.filter(topic => parseInt(topic.attributes.subsection_id) === parseInt(subsectionId))

    return (
        <div>
            <h1>Subsection - {subsection && subsection.attributes.title}</h1>
            {topics.map(topic => <p key={topic.id}>{topic.attributes.title}</p>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(SubsectionContainer)