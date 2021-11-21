import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNotification } from '../../actions/notificationsActions'
import { setScrollId } from '../../actions/scrollIdActions'
import { fetchTopic } from '../../actions/topicsActions'

import Notification from '../components/Notification'

const AsideLeftContainer = () => {

    const dispatch = useDispatch()

    const notifications = useSelector(state => state.notifications)
    const topics = useSelector(state => state.topics)

    const renderNotifications = () => (
        notifications.map(notification => (
            <Notification
                key={notification.id}
                category={notification.attributes.category}
                objectId={parseInt(notification.attributes.object_id)}
                number={notification.attributes.number}
                createdAt={notification.attributes.createdAt}
                tag={notification.attributes.tag}
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
            <div className="aside-header stats-header">Stats</div>
        </aside>
    )
}

export default AsideLeftContainer