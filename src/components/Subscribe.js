import React from 'react'

const Subscribe = ({
    subscribed,
    handleSubscribe, handleUnsubscribe
}) => {

    const renderSubscribedStatus = () =>{
        let style, value
        if (subscribed) {
            style = {
                backgroundColor: 'blue'
            }
            value = 'Subscribed'
        } else {
            style = {
                backgroundColor: 'orange'
            }
            value = 'Not Subscribed'
        }
        return (
            <div className="aside-header" style={style}>
                { value }
            </div>
        )
    }

    const renderSubscribeOptions = () => {
        let style, value, handleClick
        if (subscribed) {
            style = {
                backgroundColor: '#f2c65e'
            }
            value = 'Unsubscribe'
            handleClick = handleUnsubscribe
        } else {
            style = {
                backgroundColor: '#849df0'
            }
            value = 'Subscribe'
            handleClick = handleSubscribe
        }
        return ( 
            <div className="aside-header btn" onClick={handleClick} style={style}>
                { value }
            </div>
        )
    }

    return (
        <>
            { renderSubscribedStatus() }
            { renderSubscribeOptions() }
        </>
    )
}

export default Subscribe