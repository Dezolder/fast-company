import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import api from "../../api";
const UserCard = ({ user }) => {
    const [userRate, setUserRate] = useState(user.rate);
    const history = useHistory();
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };

    const handleRateDown = () => {
        setUserRate((prevState) => --prevState);
        // api.users.update(user._id, { ...user, rate: userRate });
        // console.log({ ...user, rate: userRate });
    };

    const handleRateUp = () => {
        setUserRate((prevState) => ++prevState);
        // api.users.update(user._id, { ...user, rate: userRate });
    };

    useEffect(() => {
        api.users.update(user._id, { ...user, rate: userRate });
    }, [userRate]);

    return (
        <div className="card mb-3">
            <div className="card-body">
                <button
                    className="position-absolute top-0 end-0 btn btn-light btn-sm"
                    onClick={handleClick}
                >
                    <i className="bi bi-gear"></i>
                </button>
                <div className="d-flex flex-column align-items-center text-center position-relative">
                    <img
                        src={`https://avatars.dicebear.com/api/avataaars/${(
                            Math.random() + 1
                        )
                            .toString(36)
                            .substring(7)}.svg`}
                        className="rounded-circle"
                        width="150"
                    />
                    <div className="mt-3">
                        <h4>{user.name}</h4>
                        <p className="text-secondary mb-1">
                            {user.profession.name}
                        </p>
                        <div className="text-muted">
                            <i
                                className="bi bi-caret-down-fill text-primary"
                                role="button"
                                onClick={handleRateDown}
                            ></i>
                            <i
                                className="bi bi-caret-up text-secondary"
                                role="button"
                                onClick={handleRateUp}
                            ></i>
                            <span className="ms-2">{userRate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
UserCard.propTypes = {
    user: PropTypes.object
};

export default UserCard;
