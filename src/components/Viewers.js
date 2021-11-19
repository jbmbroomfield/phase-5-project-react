import React from 'react'
import AddUserContainer from '../containers/AddUserContainer'

const Viewers = ({ viewers }) => {

    const renderViewers = () => (
        viewers.map(viewer => <div key={viewer.id} className="filter-user filter-user-exclude">{viewer.attributes.username}</div>)
    )

    return <div>
        <AddUserContainer />
        <div className="filter-users">
            { viewers && renderViewers() }
        </div>
    </div>
}

export default Viewers