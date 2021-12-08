import React from 'react'
import { Link } from 'react-router-dom'

const SubsectionLink = ({ subsection }) => {

    if (!subsection || !subsection.attributes) {
        return null
    }

    const { slug, title } = subsection.attributes

    return <Link to={`/forum/${slug}`}>
        {title}
    </Link>
}

export default SubsectionLink