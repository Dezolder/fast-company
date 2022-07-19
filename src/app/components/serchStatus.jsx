import React from 'react'
import PropTypes from 'prop-types'

const SearchStatus = ({ length, renderPhrase }) => (
    <h2>
        <span className={'badge ' + (length > 0 ? 'bg-primary' : 'bg-danger')}>
            {length > 0
                ? `${length + ' ' + renderPhrase(length)} с тобой сегодня`
                : 'Никто с тобой не тусанет'}
        </span>
    </h2>
)

SearchStatus.propTypes = {
    length: PropTypes.number,
    renderPhrase: PropTypes.func
}
export default SearchStatus
