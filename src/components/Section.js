import React from 'react'
import { Link } from 'react-router-dom'

const Section = ({ title, subsections }) => {

    const renderSubsections = () => (
        subsections.map(subsection => (
        <p key={subsection.id}>
            <Link to={`subsections/${subsection.id}`}>{subsection.attributes.title}</Link>
        </p>
        ))
    )

    return (
        <div>
            <h1>{title}</h1>
            {renderSubsections()}
        </div>
    )
}

export default Section