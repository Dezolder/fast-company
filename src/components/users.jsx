import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const renderPhrase = () => {
        if (users.length === 0) {
            return <h1> С тобой сегодня никто не тусанёт </h1>
        } else {
            return (
                <h1> {users.length}  {correctWord()} с тобой встретятся сегодня </h1>
            )
        }
    };

    const correctWord = () => {
        const numersRegulars = [2, 3, 4]
        const numersExeptions = [12, 13, 14]

        let regularNumber = numersRegulars.some(letter => letter === Number(users.length.toString().slice(-1)))
        let exeptionNumber = numersExeptions.some(letter => letter === users.length)

        if (exeptionNumber) {
            return "человек"
        } else {
            if (regularNumber) {
                return "человекa"
            } else {
                return "человек"
            }
        }
    }

    const handleDelete = (pers) => {
        setUsers((prefstate) => prefstate.filter((user) => user._id !== pers._id))
    };

    const renderQualities = (user) => {
        return user.qualities.map((quality) => {
            return (
                <span
                    className={"badge bg-" + quality.color}
                    style={{ marginRight: "10px" }}
                    key={quality._id}
                >
                    {quality.name}
                </span>
            );
        });
    };

    const renderTableBody = () => {
        return users.map((user) => {
            return (
                <tr key={user._id}>
                    <td >{user.name}</td>
                    <td>{renderQualities(user)}</td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}/5</td>
                    <td>
                        <button className="btn btn-primary btn-sm" onClick={() => handleDelete(user)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    const renderTable = () => {
        // console.log(users)
        return (
            <>
                {renderPhrase()}
                {/* Не получается условный рендеринг!!!!!!!!!!!! */}
                {/* users.length !== 0 ? ( */}
                < table className="table" >
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качество</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableBody()}
                    </tbody>
                </ table>
                {/* ): null; */}
            </>
        )
    }

    return renderTable();
};

export default Users;