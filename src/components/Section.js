import React, { useEffect } from 'react'

const Section = ({ title, subsections }) => {
    return (
        <div>
            <p>{title}</p>
            {subsections.map(subsection => <p>{subsection.attributes.title}</p>)}
        </div>
    )
}

export default Section