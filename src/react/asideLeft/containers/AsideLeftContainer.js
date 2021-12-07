import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deleteNotification } from 'redux/actions/notificationsActions'
import { setScrollId } from 'redux/actions/scrollIdActions'
import { fetchTopic } from 'redux/actions/topicsActions'

import NotificationContainer from './NotificationContainer'

const AsideLeftContainer = () => {

    const dispatch = useDispatch()

    const notifications = useSelector(state => state.notifications)
    const topics = useSelector(state => state.topics)

    const renderNotifications = () => (
        notifications.map(notification => (
            <NotificationContainer
                key={notification.id}
                notification={notification}
                topics={topics}
                deleteNotification={() => dispatch(deleteNotification(notification.id))}
                setScrollId={() => dispatch(setScrollId)}
                fetchTopic={() => dispatch(fetchTopic)}
            />
        ))
    )

    return (
        <aside className="aside-left">
            <div className="notifications">
                <div className="aside-header notifications-header">Notifications</div>
                { renderNotifications() }
            </div>
            {/* <div className="aside-header stats-header">Stats</div> */}
        </aside>
    )
}

export default AsideLeftContainer