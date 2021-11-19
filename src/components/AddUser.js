import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const AddUser = ({
    users, handleOnSelect, handleOnSearch, selectedUser, handleAdd, text, setText
}) => {
    
    // const handleOnSearch = (string, results) => {
    //     console.log('searched')
    //     console.log(string, results)
    // }

    const handleOnHover = (result) => {
        console.log(result)
    }

    // const handleOnSelect = (item) => {
    //     console.log(item)
    // }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return item;
    }

    const items = users.map(user => ({
        id: user.id,
        name: user.attributes.username
    }))

    console.log(text)

    return <>
        <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder="Add User"
            inputSearchString={text}
            onClear={() => console.log('hi')}
          />
          <div
            className={`filter-user${selectedUser ? ' btn' : ' filter-user-exclude'}`}
            onClick={handleAdd}
        >Add</div>
    </>
}

export default AddUser