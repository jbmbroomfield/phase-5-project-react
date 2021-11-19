import React from 'react'

const Posters = ({ posters }) => {

    const renderPosters = () => (
        posters.map(poster => <div key={poster.id} className="filter-user filter-user-exclude">{poster.attributes.username}</div>)
    )

    return <div>
        <div className="filter-users">
            { posters && renderPosters() }
        </div>
    </div>
}

export default Posters