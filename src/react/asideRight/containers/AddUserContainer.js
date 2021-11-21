import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import AddUser from '../components/AddUser'

const AddUserContainer = ({
    exclude, placeholder,
    handleAdd,
}) => {

    const allUsers = useSelector(state => state.users)

    const excludeHasSlug = slug => (
        !!exclude.find(user => user.attributes.slug === slug)
    )

    const users = allUsers.filter(user => !excludeHasSlug(user.attributes.slug))

    const [text, setText] = useState('')
    const [selectedUser, setSelectedUser] = useState(null)

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

    const handleClick = () => {
        if (selectedUser) {
            handleAdd(selectedUser.attributes.slug)
            setText('')
        }
   }

    return <AddUser
        users={users}
        selectedUser={selectedUser}
        handleOnSelect={handleOnSelect}
        handleOnSearch={handleOnSearch}
        handleClick={handleClick}
        text={text}
        setText={setText}
        placeholder={placeholder}
    />
}

export default AddUserContainer