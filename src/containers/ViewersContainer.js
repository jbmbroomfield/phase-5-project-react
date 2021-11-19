import React, { useState } from 'react'
import Viewers from '../components/Viewers'

const ViewersContainer = ({
    viewers
}) => {

    const [display, setDisplay] = useState(false)
    const toggleDisplay = () => setDisplay(!display)
    
    const caret = display ?  <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>

    return <>
            <div
                className="aside-header btn"
                onClick={toggleDisplay}
            > {caret} Viewers</div>
        { display && <Viewers viewers={viewers} /> }
    </>
}

export default ViewersContainer