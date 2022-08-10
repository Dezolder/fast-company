import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import api from "../api";
import { useHistory } from "react-router-dom";
import QualitiesList from "./qualitisList";

const UserInfo = ({ id }) => {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    api.users.getById(id).then((data) => {
      setUser(data);
    });
  }, []);

  const handleBack = () => {
    history.push("/users");
  };

  return (
    <>
      <h1>User Information:</h1>
      {user ? (
        <>
          <h2>Имя: {user.name}</h2>
          <p>Встретился раз: {user.completedMeetings}</p>
          <p>Рейтинг: {user.rate}</p>
          <p>Профессия: {user.profession.name}</p>
          <p>
            Качества:
            <QualitiesList qualities={user.qualities} />
          </p>
          <button
            onClick={() => {
              handleBack();
            }}
          >
            Back
          </button>
        </>
      ) : (
        "loading..."
      )}
    </>
  );
};

UserInfo.propTypes = {
  id: PropTypes.string.isRequired
};

export default UserInfo;
