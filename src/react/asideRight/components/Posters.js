import React from 'react'
import AddUserContainer from '../containers/AddUserContainer'

const Posters = ({ posters, handleAdd }) => {

    const renderPosters = () => (
        posters.map(poster => <div key={poster.id} className="filter-user filter-user-exclude">{poster.attributes.username}</div>)
    )

    return <div>
        <AddUserContainer exclude={posters} placeholder="Add Poster" handleAdd={handleAdd} />

        <div className="filter-users">
            { posters && renderPosters() }
        </div>
    </div>
}

export default Posters