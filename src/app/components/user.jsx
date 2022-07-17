import React from "react";
import Bookmark from "./bookmark";
import RenderQualities from "./quolitie";

const User = ({ user, ...rest }) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((item) => (
                    <RenderQualities key={item._id} {...item} />
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate} /5</td>
            <td>
                <button
                    onClick={() => rest.onDelete(user._id)}
                    className="btn btn-outline-danger"
                >
                    delete
                </button>
            </td>
            <td>
                <button
                    onClick={() => rest.onBookMark(user._id)}>

                    <Bookmark status={user.bookmark} />
                </button>

            </td>
        </tr>

    )
};

export default User