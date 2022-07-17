import React from "react"

const Bookmark = ({ status, ...rest }) => {
    return (
        <span {...rest}>
            <i className={"bi bi-bookmark" + (status === true ? "-fill" : "")}></i>
        </span>
    );
};

export default Bookmark