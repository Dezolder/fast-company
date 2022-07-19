import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({ status, ...rest }) => {
    return (
        <span {...rest}>
            <i
                className={'bi bi-bookmark' + (status === true ? '-fill' : '')}
            ></i>
        </span>
    )
}

Bookmark.propTypes = {
    status: PropTypes.bool
}

export default Bookmark
