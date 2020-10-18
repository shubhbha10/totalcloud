import React from "react";
import Home from "./home/index";
import UserProfile from "./screen/user-profile/index";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/user-profile/:id" component={UserProfile} />
        <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
