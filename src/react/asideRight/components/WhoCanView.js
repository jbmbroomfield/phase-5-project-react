import React from 'react'

import MenuPill from './MenuPill'

const WhoCanView = ({
    whoCanView,
    setWhoCanView,
}) => {

    return (
        <>
            <div className="option-row">
                <MenuPill
                    value="Members"
                    highlighted={whoCanView === 'all' || whoCanView === 'users'}
                    onClick={() => setWhoCanView('users')}
                />
                <MenuPill
                    value="Guests"
                    highlighted={whoCanView === 'all'}
                    onClick={() => setWhoCanView(whoCanView === 'all' ? 'users' : 'all')}
                />
            </div>

            <div className="option-row">
                <MenuPill
                    value="URL"
                    highlighted={whoCanView === 'url' || whoCanView === 'url_all'}
                    onClick={() => setWhoCanView('url')}
                />
                <MenuPill
                    value="Guests"
                    highlighted={whoCanView === 'url_all'}
                    onClick={() => setWhoCanView(whoCanView === 'url_all' ? 'url' : 'url_all')}
                />
            </div>

            <MenuPill
                value="Added"
                highlighted={whoCanView === 'add'}
                onClick={() => setWhoCanView('add')}
            />
        </>
    )
}

export default WhoCanView