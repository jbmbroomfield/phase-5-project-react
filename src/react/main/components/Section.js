import React from 'react'

import SubsectionSummary from './SubsectionSummary'
import SubsectionSummaryHeader from './SubsectionSummaryHeader'

const Section = ({ title, subsections, currentUser }) => {

    const renderSubsections = () => (
        subsections.map(subsection => (
            <SubsectionSummary
                key={subsection.id}
                subsection={subsection}
                currentUser={currentUser}
            />
        ))
    )

    return (
        <div className='section'>
            <h1>{title}</h1>
            <SubsectionSummaryHeader />
            { renderSubsections() }
        </div>
    )
}

export default Section