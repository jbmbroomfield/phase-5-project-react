import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const SubsectionContainer = ({ match, sections, subsections }) => {
    const subsectionId = match.params.subsectionId
    let subsection = subsections.find(subsection => subsection.id === subsectionId)

    useEffect(() => {
        
    })

    return (
        <div>
            <h1>Subsection - {subsection && subsection.attributes.title}</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    sections: state.sections,
    subsections: state.subsections,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SubsectionContainer)