import React, { useState } from 'react'
import Posters from '../components/Posters'

const PostersContainer = ({
    posters
}) => {

    const [display, setDisplay] = useState(false)
    const toggleDisplay = () => setDisplay(!display)
    
    const caret = display ?  <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>

    return <>
            <div
                className="aside-header btn"
                onClick={toggleDisplay}
            > {caret} Posters</div>
        { display && <Posters posters={posters} /> }
    </>
}

export default PostersContainer