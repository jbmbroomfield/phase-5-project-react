import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Viewers from '../components/Viewers'

import { addViewer } from 'redux/actions/topicsActions'

const ViewersContainer = ({
    viewers,
    subsectionSlug, topicSlug,
}) => {

    const dispatch = useDispatch()

    const [display, setDisplay] = useState(false)
    const toggleDisplay = () => setDisplay(!display)
    
    const caret = display ?  <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>

    const handleAdd = viewerSlug => {
        dispatch(addViewer(subsectionSlug, topicSlug, viewerSlug))
    }

    return <>
            <div
                className="aside-header btn"
                onClick={toggleDisplay}
            > {caret} Viewers</div>
        { display && <Viewers viewers={viewers} handleAdd={handleAdd} /> }
    </>
}

export default ViewersContainer