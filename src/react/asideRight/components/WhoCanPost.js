import React from 'react'

const WhoCanPost = ({
    whoCanView, whoCanPost, setWhoCanPost, guestAccess, setGuestAccess,
    password, handlePasswordChange, editPassword
}) => {

    const guestsIneligible = whoCanView === 'add' || whoCanPost === 'add' || guestAccess === null

    const handleGuestAccessChange = () => {
        setGuestAccess(guestAccess === 'post' ? 'view' : 'post')
    }

    const handleWhoCanPostChange = event => {
        const whoCanPost = event.target.value
        setWhoCanPost(whoCanPost)
        if (whoCanPost === 'add' && guestAccess === 'post') {
            setGuestAccess('view')
        }
    }

    return (
        <>
            <input
                type="checkbox"
                checked={guestAccess === 'post'}
                onChange={handleGuestAccessChange}
                disabled={guestsIneligible}
            /> <span style={{color: guestsIneligible ? '#aaa' : 'black'}}>
                    Guests
                </span><br />
            <input
                type="radio"
                value="anyone"
                name="who-can-post"
                checked={whoCanPost === "anyone"}
                onChange={handleWhoCanPostChange}
            /> Anyone who can view<br />
            <input
                type="radio"
                value="password"
                name="who-can-post"
                checked={whoCanPost === "password"}
                onChange={handleWhoCanPostChange}
            /> Those with the password<br />
            <input
                type="radio"
                value="add"
                name="who-can-post"
                checked={whoCanPost === "add"}
                onChange={handleWhoCanPostChange}
            /> Only those I add<br />
            { whoCanPost === 'password' && <div>Password: <input
                type="text"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={editPassword}
            ></input></div> }
        </>
    )
}

export default WhoCanPost