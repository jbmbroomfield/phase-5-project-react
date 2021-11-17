import React from 'react'

const WhoCanView = ({
    whoCanView,
    setWhoCanView,
}) => {



    return (
        <>
            <div
                className={`btn filter-user${whoCanView === 'all' ? '' : ' filter-user-exclude' }`}
                onClick={() => setWhoCanView('all')}
            >
                Everyone, including guests
            </div>
            <div
                className={`btn filter-user${whoCanView === 'users' ? '' : ' filter-user-exclude' }`}
                onClick={() => setWhoCanView('users')}
            >
                Members
            </div>
            <div
                className={`btn filter-user${whoCanView === 'url' ? '' : ' filter-user-exclude' }`}
                onClick={() => setWhoCanView('url')}
            >
                Anyone with the URL
            </div>
            <div
                className={`btn filter-user${whoCanView === 'add' ? '' : ' filter-user-exclude' }`}
                // name={user}
                onClick={setWhoCanView('add')}
            >
                Only those I add as a viewer
            </div>
        </>
    )
}

export default WhoCanView