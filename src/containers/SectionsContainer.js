import React from 'react'
import { connect } from 'react-redux'

import Section from '../components/Section'

const SectionsContainer = ({ sections, subsections }) => {

    const getSubsections = sectionId => (
        subsections.filter(subsection => (
            subsection.attributes.section_id.toString() === sectionId
        ))
    ) 

    const renderSections = () => {
        return sections.map(section => (
            <Section
                key={section.id}
                title={section.attributes.title}
                subsections={getSubsections(section.id)}
            />
        ))
    }

    return (
        <div>{renderSections()}</div>
    )
}

const mapStateToProps = state => ({
    sections: state.sections,
    subsections: state.subsections,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SectionsContainer)