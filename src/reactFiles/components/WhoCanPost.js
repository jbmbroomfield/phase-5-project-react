import React from 'react'

const WhoCanPost = ({
    display, toggleDisplay, whoCanView, whoCanPost, setWhoCanPost
}) => {

    const renderMembers = () => (
        <div
            className={`btn filter-user${whoCanPost === 'all' || whoCanPost === 'users' ? '' : ' filter-user-exclude' }`}
            onClick={() => setWhoCanPost('users')}
        >
            Members
        </div>
    )

    const renderAllGuests = () => (
        <div
            className={`btn filter-user${whoCanPost === 'all' ? '' : ' filter-user-exclude' }`}
            onClick={() => setWhoCanPost(whoCanPost === 'all' ? 'users' : 'all')}
        >
            Guests
        </div>
    )

    const renderMembersAndGuests = () => (
        <div className="option-row">
            { renderMembers() }
            { renderAllGuests() }
        </div>
    )

    const renderPassword = () => (
        <div
            className={`btn filter-user${whoCanPost === 'password_all' || whoCanPost === 'password' ? '' : ' filter-user-exclude' }`}
            onClick={() => setWhoCanPost('password')}
        >
            Password
        </div>
    )

    const renderPasswordGuests = () => (
        <div
            className={`btn filter-user${whoCanPost === 'password_all' ? '' : ' filter-user-exclude' }`}
            onClick={() => setWhoCanPost(whoCanPost === 'password_all' ? 'password' : 'password_all')}
        >
            Guests
        </div>
    )

    const renderPasswordAndGuests = () => (
        <div className="option-row">
            { renderPassword() }
            { renderPasswordGuests() }
        </div>
    )

    const renderAdded = () => (
        <div
            className={`btn filter-user${whoCanPost === 'add' ? '' : ' filter-user-exclude' }`}
            onClick={() => setWhoCanPost('add')}
        >
            Added
        </div>
    )
    
    const renderOptions = () => {
        if (whoCanView === 'all' || whoCanView === 'url_all') {
            return <>
                { renderMembersAndGuests() }
                { renderPasswordAndGuests() }
            </>
        } else {
            return <>
                { renderMembers() }
                { renderPassword() }
            </>
        }
    }

    return (
        <>
            { renderOptions() }
            { renderAdded() }
        </>
    )
}

export default WhoCanPost