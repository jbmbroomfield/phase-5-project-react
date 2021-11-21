import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Posters from '../components/Posters'

import { addPoster } from 'redux/actions/topicsActions'

const PostersContainer = ({
    posters,
    subsectionSlug, topicSlug
}) => {

    const dispatch = useDispatch()

    const [display, setDisplay] = useState(false)
    const toggleDisplay = () => setDisplay(!display)
    
    const caret = display ?  <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>

    const handleAdd = posterSlug => {
        dispatch(addPoster(subsectionSlug, topicSlug, posterSlug))
    }

    return <>
            <div
                className="aside-header btn"
                onClick={toggleDisplay}
            > {caret} Posters</div>
        { display && <Posters posters={posters} handleAdd={handleAdd} /> }
    </>
}

export default PostersContainer