import React, { useRef, useEffect } from 'react'
import PostContent from './PostContent'
import PostInfo from './PostInfo'
import PostNotes from './PostNotes'

const Post = ({ text, user, tag, createdAt, insertText, isVisible, scrollTo, setScrollId }) => {

    const insertPostText = () => insertText(`${user.attributes.username} said "${text}"\n`)

    const ref = useRef(null)

    useEffect(() => {
        if (scrollTo) {
            ref.current.scrollIntoView()
            setScrollId(null)
        }
    }, [scrollTo, setScrollId])

    return (
        <div className="post" id={tag} ref={ref}>
            <PostInfo username={user && user.attributes.username} />
            <PostContent text={text} tag={tag} createdAt={createdAt} />
            <PostNotes insertPostText={insertPostText} />
        </div>
    )
}

export default Post