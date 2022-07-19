import React, { useState } from 'react'
import api from '../app/api'
import SearchStatus from './components/serchStatus'
import Users from './components/users'

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    // const [mark, setMark] = useState(false)

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }

    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1))
        if (number > 4 && number < 15) return 'человек тусанет'
        if ([2, 3, 4].indexOf(lastOne) >= 0) return 'человека тусанут'
        if (lastOne === 1) return 'человек тусанет'
        return 'человек тусанет'
    }

    const handleToogleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    user.bookmark = !user.bookmark
                }
                return user
            })
        )
    }

    return (
        <>
            <SearchStatus length={users.length} renderPhrase={renderPhrase} />

            <Users
                users={users}
                onDelete={handleDelete}
                onBookMark={handleToogleBookMark}
            />
        </>
    )
}

export default App
