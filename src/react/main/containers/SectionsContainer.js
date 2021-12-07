import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'

import Section from '../components/Section'

import { fetchSubsection } from 'redux/actions/subsectionsActions'

import sectionsChannel from 'channels/sectionsChannel'



const SectionsContainer = () => {

    const dispatch = useDispatch()
    
	useEffect(() => {
		return sectionsChannel(subsectionSlug => dispatch(fetchSubsection(subsectionSlug)))
	}, [dispatch])

    const sections = useSelector(state => state.sections)
    const subsections = useSelector(state => state.subsections)

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

    return <>
        <br /><br />
        {/* <Link to='/'>
            Home
        </Link> */}
        {renderSections()}
    </>
}

export default SectionsContainer