import React from 'react'
import PropTypes from 'prop-types'

const RenderQualities = ({ ...quality }) => {
    return (
        <span
            className={'badge bg-' + quality.color}
            style={{ marginRight: '10px' }}
            key={quality._id}
        >
            {quality.name}
        </span>
    )
}
RenderQualities.propTypes = {
    quality: PropTypes.object
}
export default RenderQualities
