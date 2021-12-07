import React from 'react'
import { Link } from 'react-router-dom'

const SubsectionLink = ({ 
    subsection
}) => {

    const subsectionAttributes = subsection.attributes
    
    const slug = subsectionAttributes.slug
    const title = subsectionAttributes.title

    return (
        <Link to={`/forum/${slug}`}>
            {title}
        </Link>
    )
}

export default SubsectionLink