import React from "react";
import NavBar from "./components/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import UsersPage from "./components/usersPage";
import NotFound from "./components/notFound";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={UsersPage} />
        <Route path="/" exact component={Main} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
