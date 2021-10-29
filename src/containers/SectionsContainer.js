import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Section from '../components/Section'

import { fetchCurrentUser } from '../actions/currentUserActions'
import { fetchSections } from '../actions/sectionsActions'
import { fetchSubsections } from '../actions/subsectionsActions'
import { fetchTopics } from '../actions/topicsActions'
import { fetchUsers } from '../actions/usersActions'

const SectionsContainer = ({
    sections, subsections,
	fetchCurrentUser,
	fetchSections,
	fetchSubsections,
	fetchTopics,
	fetchUsers,
}) => {

    useEffect(() => {
		fetchCurrentUser()
		fetchSections()
		fetchSubsections()
		fetchTopics()
		fetchUsers()
	}, [
		fetchCurrentUser,
		fetchSections,
		fetchSubsections,
		fetchTopics,
		fetchUsers,
    ])
    
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

    return (
        <main>{renderSections()}</main>
    )
}

const mapStateToProps = state => ({
    sections: state.sections,
    subsections: state.subsections,
})

const mapDispatchToProps = dispatch => ({
	fetchCurrentUser: () => dispatch(fetchCurrentUser()),
	fetchSections: () => dispatch(fetchSections()),
	fetchSubsections: () => dispatch(fetchSubsections()),
	fetchTopics: () => dispatch(fetchTopics()),
	fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SectionsContainer)