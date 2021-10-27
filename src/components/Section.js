import React from 'react'

const Section = ({ title, subsections }) => {
    return (
        <div>
            <h1>{title}</h1>
            {subsections.map(subsection => <p key={subsection.id}>{subsection.attributes.title}</p>)}
        </div>
    )
}

export default Section