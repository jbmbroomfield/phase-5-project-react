import React from 'react'

const WhoCanView = ({
    whoCanView,
    setWhoCanView,
}) => {

    return (
        <>
            <div className="option-row">
                <div
                    className={`btn filter-user${whoCanView === 'all' || whoCanView === 'users' ? '' : ' filter-user-exclude' }`}
                    onClick={() => setWhoCanView('users')}
                >
                    Members
                </div>
                <div
                    className={`btn filter-user${whoCanView === 'all' ? '' : ' filter-user-exclude' }`}
                    onClick={() => setWhoCanView(whoCanView === 'all' ? 'users' : 'all')}
                >
                    Guests
                </div>
            </div>

            <div className="option-row">
                <div
                    className={`btn filter-user${whoCanView === 'url' || whoCanView === 'url_all' ? '' : ' filter-user-exclude' }`}
                    onClick={() => setWhoCanView('url')}
                >
                    URL
                </div>
                <div
                    className={`btn filter-user${whoCanView === 'url_all' ? '' : ' filter-user-exclude' }`}
                    onClick={() => setWhoCanView(whoCanView === 'url_all' ? 'url' : 'url_all')}
                >
                    Guests
                </div>
            </div>

            <div
                className={`btn filter-user${whoCanView === 'add' ? '' : ' filter-user-exclude' }`}
                // name={user}
                onClick={() => setWhoCanView('add')}
            >
                Added
            </div>
        </>
    )
}

export default WhoCanView