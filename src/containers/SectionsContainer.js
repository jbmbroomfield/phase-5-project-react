import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchSections } from '../actions/sectionsActions'

import Section from '../components/Section'

const SectionsContainer = ({ sections, fetchSections, fetchSubsections }) => {

    useEffect(() => {
        fetchSections()
    }, [fetchSections])

    const renderSections = () => {
        return sections.map(section => (
            <Section
                key={section.id}
                title={section.attributes.title}
                subsections={section.subsections || []}
            />
        ))
    }

    return (
        <div>{renderSections()}</div>
    )
}

const mapStateToProps = state => ({
    sections: state.sections
})

const mapDispatchToProps = dispatch => ({
    fetchSections: () => dispatch(fetchSections()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SectionsContainer)