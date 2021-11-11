import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Section from '../components/Section'

import { fetchCurrentUser } from '../actions/currentUserActions'
import { fetchSections } from '../actions/sectionsActions'
import { fetchSubsections, fetchSubsection } from '../actions/subsectionsActions'
import { fetchTopics } from '../actions/topicsActions'
import { fetchUsers } from '../actions/usersActions'
import sectionsChannel from '../channels/sectionsChannel'

const SectionsContainer = ({
    sections, subsections,
	fetchCurrentUser,
	fetchSections,
	fetchSubsections, fetchSubsection,
	fetchTopics,
	fetchUsers,
}) => {

    useEffect(() => {
		fetchSections()
		fetchSubsections()
	}, [
		fetchSections,
		fetchSubsections,
    ])
    
	useEffect(() => {
		return sectionsChannel(fetchSubsection)
	}, [fetchSubsection])

    const getSubsections = sectionId => (
        subsections.filter(subsection => (
            parseInt(subsection.attributes.section_id) === parseInt(sectionId)
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

    return renderSections()
}

const mapStateToProps = state => ({
    sections: state.sections,
    subsections: state.subsections,
})

const mapDispatchToProps = {
	fetchCurrentUser,
	fetchSections,
	fetchSubsections,
	fetchSubsection,
	fetchTopics,
	fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionsContainer)