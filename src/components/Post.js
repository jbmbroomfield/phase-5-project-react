import React from 'react'
import PostContent from './PostContent'
import PostInfo from './PostInfo'
import PostNotes from './PostNotes'

const Post = ({ text, user, tag, createdAt, insertText, isVisible }) => {

    const insertPostText = () => insertText(`${user.attributes.username} said "${text}"\n`)

    return (
        <div className="post">
            <PostInfo username={user && user.attributes.username} />
            <PostContent text={text} tag={tag} createdAt={createdAt} />
            <PostNotes insertPostText={insertPostText} />
        </div>
    )
}

export default Post