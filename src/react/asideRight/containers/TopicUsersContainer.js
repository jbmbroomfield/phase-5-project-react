import React, { useState } from 'react'

import TopicUsers from '../components/TopicUsers'

const TopicUsersContainer = ({
    users, userType,
    handleAdd,
}) => {

    const [display, setDisplay] = useState(false)
    const toggleDisplay = () => setDisplay(!display)
    
    const caret = display ?  <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>

    return <>
            <div
                className="aside-header btn"
                onClick={toggleDisplay}
            > {caret} {userType}s</div>
        { display && <TopicUsers userType={userType} users={users} handleAdd={handleAdd} /> }
    </>
}

export default TopicUsersContainer