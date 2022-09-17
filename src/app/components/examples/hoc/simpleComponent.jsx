import React from "react";
import { PropTypes } from "prop-types";
const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        isAuth ?
            <button
                className="btn btn-primary mb-4"
                onClick={onLogOut}
            >Выйти из системы
            </button>
            :
            <button
                className="btn btn-primary mb-4"
                onClick={onLogin}
            >Войти
            </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};
export default SimpleComponent;
