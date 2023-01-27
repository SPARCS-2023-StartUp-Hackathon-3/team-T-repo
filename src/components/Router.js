import React, { useState } from "react";
import { HashRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Auth from "./Auth";
import Login from "./Login";

const AppRouter = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                <>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/auth"
                element={<Auth />}
            
              />
                </>
                
            </Routes>
        </Router>
    );
};

export default AppRouter;
