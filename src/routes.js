import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/notfound';

export default function AppRouter() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/*" component={NotFound} />
            </Switch>
        </Router>
    )
}