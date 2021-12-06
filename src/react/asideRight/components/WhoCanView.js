import React from 'react'

const WhoCanView = ({
    whoCanView,
    setWhoCanView,
    guestAccess,
    setGuestAccess,
}) => {

    const handleGuestAccessChange = () => {
        if (!!guestAccess) {
            return setGuestAccess(null)
        }
        setGuestAccess('view')
    }

    const handleWhoCanViewChange = event => {
        const whoCanView = event.target.value
        setWhoCanView(whoCanView)
        if (whoCanView === 'add') {
            setGuestAccess(null)
        }
    }

    return (
        <>
            <input
                type="checkbox"
                checked={!!guestAccess}
                onChange={handleGuestAccessChange}
                disabled={whoCanView === 'add'}
            /> <span style={{color: whoCanView === 'add' ? '#aaa' : 'black'}}>
                    Guests
                </span><br />
            <input
                type="radio"
                value="anyone"
                name="who-can-view"
                checked={whoCanView === "anyone"}
                onChange={handleWhoCanViewChange}
            /> Anyone<br />
            <input
                type="radio"
                value="url"
                name="who-can-view"
                checked={whoCanView === "url"}
                onChange={handleWhoCanViewChange}
            /> Those with the URL<br />
            <input
                type="radio"
                value="add"
                name="who-can-view"
                checked={whoCanView === "add"}
                onChange={handleWhoCanViewChange}
            /> Only those I add<br />
            {/* <div className="option-row">
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
            /> */}
        </>
    )
}

export default WhoCanView