import React, { useState } from 'react'

import AddUser from '../components/AddUser'

const AddUserContainer = ({
    allUsers, excludedUsers,
}) => {

    const [text, setText] = useState('')
    const [selectedUser, setSelectedUser] = useState(null)

    const users = [
        {id: "0", attributes: {username: "Jim"}},
        {id: "1", attributes: {username: "Alice"}},
        {id: "2", attributes: {username: "Bob"}},
    ]

    const handleOnSelect = item => {
        const newText = item.name
        setText(newText)
        const user = users.find(user => user.attributes.username === newText)
        setSelectedUser(user)
    }
    
    const handleOnSearch = newText => {
        setText(newText)
        const user = users.find(user => user.attributes.username.toLowerCase() === newText.toLowerCase())
        setSelectedUser(user)
    }

    const handleAdd = () => {
        if (selectedUser) {
            console.log('adding', selectedUser)
        }
    }

    console.log(selectedUser)

    return <AddUser
        users={users}
        selectedUser={selectedUser}
        handleOnSelect={handleOnSelect}
        handleOnSearch={handleOnSearch}
        handleAdd={handleAdd}
        text={text}
        setText={setText}
    />
}

export default AddUserContainer