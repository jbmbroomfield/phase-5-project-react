import React from 'react'
import { Link } from 'react-router-dom'

const Section = ({ title, subsections }) => {

    const RenderSubsections = () => (
        subsections.map(subsection => (
        <p key={subsection.id}>
            <Link to={`subsections/${subsection.id}`}>{subsection.attributes.title}</Link>
        </p>
        ))
    )

    return (
        <div className='section'>
            <h1>{title}</h1>
            <RenderSubsections />
        </div>
    )
}

export default Section