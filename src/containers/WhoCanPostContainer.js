import React, { useState } from 'react'

import WhoCanPost from '../components/WhoCanPost'

const WhoCanPostContainer = ({ whoCanView, whoCanPost }) => {

    const [display, setDisplay] = useState(false)

    const toggleDisplay = () => {
        setDisplay(!display)
    }

    const caret = display ?  <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>

    return (
        <>
            <div className="aside-header btn" onClick={toggleDisplay}>
                {caret} Who Can Post
            </div>
            { display && (
                <WhoCanPost
                    display={display}
                    toggleDisplay={toggleDisplay}
                    whoCanView={whoCanView}
                    whoCanPost={whoCanPost}
                />
            ) }        
        </>
    )
}

export default WhoCanPostContainer