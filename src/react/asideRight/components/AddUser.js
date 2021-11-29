import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const AddUser = ({
    users, handleOnSelect, handleOnSearch, selectedUser, handleClick, text, setText,
    placeholder,
}) => {

    const formatResult = item => {
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
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            placeholder={placeholder}
            inputSearchString={text}
            onClear={() => console.log('hi')}
          />
          <div
            className={`filter-user${selectedUser ? ' btn' : ' filter-user-exclude'}`}
            onClick={handleClick}
        >Add</div>
    </>
}

export default AddUser