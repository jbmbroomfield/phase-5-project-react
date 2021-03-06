import React, { useRef, useEffect } from 'react'
import PostContent from './PostContent'
import PostInfo from './PostInfo'
import PostNotes from './PostNotes'

const Post = ({ 
    text,
    user,
    tag,
    createdAt,
    insertText,
    isVisible,
    scrollTo, setScrollId,
    focusTextArea,
    draft,
    my_flags, publicFlags,
    createFlag, deleteFlag,
    timezone,
    canPost,
    guestName,
}) => {

    const insertQuote = () =>{
        // insertText(`${user.attributes.username} said "${text}"\n`)
        const authorName = user && user.attributes && user.attributes.username ? user.attributes.username : guestName
        insertText(`[quote author=${authorName}]${text}[/quote]\n`)
        setTimeout(() => focusTextArea({draft}), 10)
    }

    const postRef = useRef(null)

    useEffect(() => {
        if (scrollTo) {
            postRef.current.scrollIntoView()
            setScrollId(null)
        }
    }, [scrollTo, setScrollId])

    const liked = my_flags.includes('like')
    const disliked = my_flags.includes('dislike')
    const likeCount = publicFlags && publicFlags.like.length
    const dislikeCount = publicFlags && publicFlags.dislike.length

    return (
        <div className="post" id={tag} ref={postRef}>
            <PostInfo
                user={user}
                avatarUrl={user && user.attributes.get_avatar_image}
                guestName={guestName}
            />
            <PostContent text={text} tag={tag} createdAt={createdAt} timezone={timezone} />
            <PostNotes
                insertQuote={insertQuote}
                liked={liked}
                disliked={disliked}
                likeCount={likeCount}
                dislikeCount={dislikeCount}
                createFlag={createFlag}
                deleteFlag={deleteFlag}
                canPost={canPost}
            />
        </div>
    )
}

export default Post