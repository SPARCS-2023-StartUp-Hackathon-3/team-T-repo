import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
