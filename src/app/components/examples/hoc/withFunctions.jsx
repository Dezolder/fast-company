import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    function onLogin() {
        localStorage.setItem("auth", "token");
    }
    function onLogOut() {
        localStorage.removeItem("auth");
    }
    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogOut={onLogOut}
                onLogin={onLogin} />
        </CardWrapper>
    );
};

export default withFunctions;
