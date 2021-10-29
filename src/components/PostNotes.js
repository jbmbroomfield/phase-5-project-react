import React from 'react'

const PostNotes = ({ insertPostText }) => {
    return (
        <div className="post-notes">
            <button onClick={insertPostText}>Quote</button>
        </div>
    )
}

export default PostNotes