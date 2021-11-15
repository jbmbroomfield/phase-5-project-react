import React from 'react'
import { connect } from 'react-redux'
import { deleteNotification } from '../actions/notificationsActions'
import { setScrollId } from '../actions/scrollIdActions'
import { fetchTopic } from '../actions/topicsActions'

import Notification from '../components/Notification'

const AsideLeftContainer = ({ notifications, topics, deleteNotification, setScrollId, fetchTopic }) => {

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
                fetchTopic={fetchTopic}
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

const mapStateToProps = state => ({
    notifications: state.notifications,
    topics: state.topics,
})

const mapDispatchToProps = {
    deleteNotification,
    setScrollId,
    fetchTopic,
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideLeftContainer)