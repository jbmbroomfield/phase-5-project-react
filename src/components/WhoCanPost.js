import React from 'react'

const WhoCanPost = ({
    display, toggleDisplay, whoCanView, whoCanPost
}) => {

    const renderAll = () => (
        <div
            className={`btn filter-user${whoCanPost === 'all' ? '' : ' filter-user-exclude' }`}
            // name={user}
            // onClick={handleClick}
        >
            Everyone, including guests
        </div>
    )

    const renderUsers = () => (
        <div
            className={`btn filter-user${whoCanPost === 'users' ? '' : ' filter-user-exclude' }`}
            // name={user}
            // onClick={handleClick}
        >
            Members
        </div>
    )

    const renderViewers = () => (
        <div
            className={`btn filter-user${whoCanPost === 'all' || whoCanPost === 'users' ? '' : ' filter-user-exclude' }`}
            // name={user}
            // onClick={handleClick}
        >
            Anyone who can view
        </div>

    )

    const renderPassword = (viewer) => (
        <div
            className={`btn filter-user${whoCanPost === 'password' ? '' : ' filter-user-exclude' }`}
            // name={user}
            // onClick={handleClick}
        >
            {viewer ? 'Any viewer' : 'Anyone'} with the password
        </div>
    )

    const renderAdd = () => (
        <div
            className={`btn filter-user${whoCanPost === 'add' ? '' : ' filter-user-exclude' }`}
            // name={user}
            // onClick={handleClick}
        >
            Only those I add as a poster
        </div>
    )
    
    const renderOptions = () => {
        if (whoCanView === 'all') {
            return <>
                { renderAll() }
                { renderUsers() }
                { renderPassword(false) }
                { renderAdd() }
            </>
        } else {
            return <>
                { renderViewers() }
                { renderPassword(true) }
                { renderAdd() }
            </>

        }
    }

    return (
        <>
            {renderOptions()}
        </>
    )
}

export default WhoCanPost