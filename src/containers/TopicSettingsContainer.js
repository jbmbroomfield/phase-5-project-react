import React, { useState } from 'react'
import TopicSettings from '../components/TopicSettings'

const TopicSettingsContainer = ({ whoCanView, whoCanPost }) => {

    const [display, setDisplay] = useState(false)

    const toggleDisplay = () => setDisplay(!display)
        
    const caret = display ?  <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>

    return <>
            <div
                className="aside-header btn"
                onClick={toggleDisplay}
            > {caret} Thread Settings</div>
            { display && <TopicSettings 
                whoCanView={whoCanView}
                whoCanPost={whoCanPost}
            /> }
    </>
}

export default TopicSettingsContainer