import React from 'react'
import { connect } from 'react-redux'
import Filter from '../components/Filter'

import { excludeAllUsers, includeAllUsers, toggleFlagFilter, toggleUserFilter } from '../actions/topicDisplayActions'

const FilterContainer = ({
    topicDisplay,
    topic,
    toggleUserFilter, toggleFlagFilter,
    includeAllUsers, excludeAllUsers,
    displayFilter, toggleDisplayFilter,
}) => {

    const users = topic?.attributes.posters
    const userFilter = topicDisplay.users
    const flagFilter = topicDisplay.flags

    
    const replyCaret = displayFilter ?  <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>

    return (
        <>
            <div
                className="aside-header btn"
                onClick={toggleDisplayFilter}
            > {replyCaret} Filter</div>
            { displayFilter && <Filter
                users={users}
                userFilter={userFilter} flagFilter={flagFilter}
                toggleUserFilter={toggleUserFilter}
                toggleFlagFilter={toggleFlagFilter}
                includeAllUsers={includeAllUsers}
                excludeAllUsers={excludeAllUsers}
            />}
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