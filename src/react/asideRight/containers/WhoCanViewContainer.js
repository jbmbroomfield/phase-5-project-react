import React, { useState } from 'react'

import WhoCanView from '../components/WhoCanView'

const WhoCanViewContainer = ({ whoCanView, editTopic }) => {

    const [display, setDisplay] = useState(false)

    const toggleDisplay = () => {
        setDisplay(!display)
    }

    const caret = display ?  <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>

    const setWhoCanView = whoCanView => {
        editTopic({
            who_can_view: whoCanView
        })
    }

    return (
        <>
            <div className="aside-header btn" onClick={toggleDisplay}>
                {caret} Who Can View
            </div>
            { display && (
                <WhoCanView
                    display={display}
                    toggleDisplay={toggleDisplay}
                    whoCanView={whoCanView}
                    setWhoCanView={setWhoCanView}
                /> 
            ) }
        </>
    )
}

export default WhoCanViewContainer