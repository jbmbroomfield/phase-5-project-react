import React from 'react'
import { connect } from 'react-redux'
import { deleteNotification } from '../actions/notificationsActions'
import { setScrollId } from '../actions/scrollIdActions'

import Notification from '../components/Notification'

const AsideLeftContainer = ({ notifications, topics, deleteNotification, setScrollId }) => {
    
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
                deleteNotification={() => deleteNotification(notification.id)}
                setScrollId={setScrollId}
            />
        ))
    )

    return (
        <aside className="aside-left">
            <div className="notifications">
                Notifications
                { renderNotifications() }
            </div>
        </aside>
    )
}

const mapStateToProps = state => ({
    notifications: state.notifications,
    topics: state.topics,
})

const mapDispatchToProps = dispatch => ({
    deleteNotification: notificationId => dispatch(deleteNotification(notificationId)),
    setScrollId: id => {
        return dispatch(setScrollId(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AsideLeftContainer)