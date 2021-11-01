import React from 'react'
import { connect } from 'react-redux'
import { deleteNotification } from '../actions/notificationsActions'

import Notification from '../components/Notification'

const AsideLeftContainer = ({ notifications, topics, deleteNotification }) => {
    
    const renderNotifications = () => (
        notifications.map(notification => (
            <Notification
                key={notification.id}
                category={notification.attributes.category}
                objectId={parseInt(notification.attributes.object_id)}
                number={notification.attributes.number}
                createdAt={notification.attributes.createdAt}
                topics={topics}
                deleteNotification={() => deleteNotification(notification.id)}
            />
        ))
    )

    return (
        <aside className="aside-left">
            Notifications
            { renderNotifications() }
        </aside>
    )
}

const mapStateToProps = state => ({
    notifications: state.notifications,
    topics: state.topics,
})

const mapDispatchToProps = dispatch => ({
    deleteNotification: notificationId => dispatch(deleteNotification(notificationId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AsideLeftContainer)