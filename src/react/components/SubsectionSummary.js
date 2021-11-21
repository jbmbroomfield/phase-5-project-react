import React from 'react'
import { Link } from 'react-router-dom'
import LastPost from './LastPost'

const SubsectionSummary = ({
    subsection
}) => {
    if (!subsection) {
        return null
    }

    const attributes = subsection.attributes
    const lastPost = attributes.last_post

    return (
        <div className="subsection-summary">
            <div>
                <Link to={`forum/${subsection.attributes.slug}`}>
                    {subsection.attributes.title}
                </Link>
            </div>
            <div>
                {attributes.topic_count}
            </div>
            <div>
                {attributes.post_count}
            </div>
            <div>
                <div><LastPost lastPost={lastPost} showTopic={true} /></div>
            </div>
        </div>
    )
}

export default SubsectionSummary