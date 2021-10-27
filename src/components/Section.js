import React, { useEffect } from 'react'

const Section = ({ title, subsections }) => {
    return (
        <div>
            <h1>{title}</h1>
            {subsections.map(subsection => <p>{subsection.attributes.title}</p>)}
        </div>
    )
}

export default Section