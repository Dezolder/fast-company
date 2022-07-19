import React, { useState } from 'react'
import Pagination from './pagination'
import User from './user'
import { paginate } from './../utils/paginate'
import PropTypes from 'prop-types'

const Users = ({ users, ...rest }) => {
    const count = users.length
    const pageSize = 4
    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const userCrop = paginate(users, currentPage, pageSize)

    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th />
                            <th scope="col">Bookmark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User
                                key={user._id}
                                user={user}
                                onDelete={rest.onDelete}
                                onBookMark={rest.onBookMark}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    )
}
Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func,
    onBookMark: PropTypes.func
}
export default Users
