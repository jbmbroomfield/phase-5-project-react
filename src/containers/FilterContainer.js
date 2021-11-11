import React from 'react'
import { connect } from 'react-redux'
import Filter from '../components/Filter'

import { excludeAllUsers, includeAllUsers, toggleFlagFilter, toggleUserFilter } from '../actions/topicDisplayActions'

const FilterContainer = ({
    topicDisplay,
    topic,
    toggleUserFilter, toggleFlagFilter,
    includeAllUsers, excludeAllUsers,
}) => {

    const users = topic?.attributes.posters
    const userFilter = topicDisplay.users
    const flagFilter = topicDisplay.flags

    return (
        <>
            <div className="aside-header">Filter</div>
            <Filter
                users={users}
                userFilter={userFilter} flagFilter={flagFilter}
                toggleUserFilter={toggleUserFilter}
                toggleFlagFilter={toggleFlagFilter}
                includeAllUsers={includeAllUsers}
                excludeAllUsers={excludeAllUsers}
            />
        </>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    toggleUserFilter,
    toggleFlagFilter,
    includeAllUsers,
    excludeAllUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)