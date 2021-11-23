import React from 'react'

import MenuPill from './MenuPill'

const WhoCanPost = ({
    whoCanView, whoCanPost, setWhoCanPost
}) => {

    const renderMembers = () => (
        <MenuPill
            value="Members"
            highlighted={whoCanPost === 'all' || whoCanPost === 'users'}
            onClick={() => setWhoCanPost('users')}
        />
    )

    const renderAllGuests = () => (
        <MenuPill
            value="Guests"
            highlighted={whoCanPost === 'all'}
            onClick={() => setWhoCanPost(whoCanPost === 'all' ? 'users' : 'all')}
        />
    )

    const renderMembersAndGuests = () => (
        <div className="option-row">
            { renderMembers() }
            { renderAllGuests() }
        </div>
    )

    const renderPassword = () => (
        <MenuPill
            value="Password"
            highlighted={whoCanPost === 'password_all' || whoCanPost === 'password'}
            onClick={() => setWhoCanPost('password')}
        />
    )

    const renderPasswordGuests = () => (
        <MenuPill
            value="Guests"
            highlighted={whoCanPost === 'password_all'}
            onClick={() => setWhoCanPost(whoCanPost === 'password_all' ? 'password' : 'password_all')}
        />
    )

    const renderPasswordAndGuests = () => (
        <div className="option-row">
            { renderPassword() }
            { renderPasswordGuests() }
        </div>
    )

    const renderAdded = () => (
        <MenuPill
            value="Added"
            highlighted={whoCanPost === 'add'}
            onClick={() => setWhoCanPost('add')}
        />
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