import React from "react";
import { PropTypes } from "prop-types";

const SearchUser = ({
    type,
    placeholder,
    name,
    value,
    onChange
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}

        />
    );
};

SearchUser.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchUser;
