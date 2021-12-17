import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'

import Section from '../components/Section'

import { fetchSubsection, fetchSubsections } from 'redux/actions/subsectionsActions'

import sectionsChannel from 'channels/sectionsChannel'
import { fetchSections } from 'redux/actions/sectionsActions'
import { removeCurrentSubsection } from 'redux/actions/currentSubsectionActions'
import { removeCurrentTopic } from 'redux/actions/currentTopicActions'
import { removeCurrentUserTopic } from 'redux/actions/currentUserTopicActions'



const SectionsContainer = () => {

    const dispatch = useDispatch()

	useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(removeCurrentSubsection())
        dispatch(removeCurrentTopic())
        dispatch(removeCurrentUserTopic())
        dispatch(fetchSections())
        dispatch(fetchSubsections())
		return sectionsChannel(subsectionSlug => dispatch(fetchSubsection(subsectionSlug)))
	}, [dispatch])

    const sections = useSelector(state => state.sections)
    const subsections = useSelector(state => state.subsections)
    const currentUser = useSelector(state => state.currentUser)

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
                currentUser={currentUser}
            />
        ))
    }

    return <>
        <br /><br />
        {/* <Link to='/'>
            Home
        </Link> */}
        {renderSections()}
    </>
}

export default SectionsContainer