import React from 'react'

const SubsectionBottomBar = ({ handleNewTopic }) => {

    return (
        <div className="bottom-bar">
            <span className="nav-link float-right" onClick={handleNewTopic}>New Thread</span>
        </div>
    )
}

export default SubsectionBottomBar