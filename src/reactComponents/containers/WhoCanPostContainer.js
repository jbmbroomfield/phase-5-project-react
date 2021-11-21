import React, { useState } from 'react'

import WhoCanPost from '../components/WhoCanPost'

const WhoCanPostContainer = ({ whoCanView, whoCanPost, editTopic }) => {

    const [display, setDisplay] = useState(false)

    const toggleDisplay = () => {
        setDisplay(!display)
    }

    const caret = display ?  <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>

    const setWhoCanPost = whoCanPost => {
        editTopic({
            who_can_post: whoCanPost
        })
    }

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
                    setWhoCanPost={setWhoCanPost}
                />
            ) }        
        </>
    )
}

export default WhoCanPostContainer