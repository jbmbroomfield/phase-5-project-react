import React from 'react'
import { connect } from 'react-redux'
import Filter from '../components/Filter'

import { excludeAllUsers, includeAllUsers, toggleUserFilter } from '../actions/topicDisplayActions'

const FilterContainer = ({
    topicDisplay,
    topic,
    toggleUserFilter, includeAllUsers, excludeAllUsers,
}) => {

    const users = topic?.attributes.posters
    const userFilter = topicDisplay.users

    return (
        <>
            <div className="aside-header">Filter</div>
            <Filter
                users={users}
                userFilter={userFilter}
                toggleUserFilter={toggleUserFilter}
                includeAllUsers={includeAllUsers}
                excludeAllUsers={excludeAllUsers}
            />
        </>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    toggleUserFilter: user => dispatch(toggleUserFilter(user)),
    includeAllUsers: () => dispatch(includeAllUsers()),
    excludeAllUsers: () => dispatch(excludeAllUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)