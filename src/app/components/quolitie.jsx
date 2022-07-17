import React from "react";

const RenderQualities = ({ ...quality }) => {
    return (
        <span
            className={"badge bg-" + quality.color}
            style={{ marginRight: "10px" }}
            key={quality._id}
        >
            {quality.name}
        </span>
    );
};

export default RenderQualities