import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Callback from './components/Callback';

// config routes
const routes = [
    {
        path: "/",
        component: HomeLayout,
        routes: [
            {
                path: "/callback",
                component: Callback
            }
        ]
    }
];

// wrap <Route> and use this everywhere instead, then when sub routes are added
// to any route it'll work
const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (<route.component {...props} routes={route.routes}/>)}/>
);

const RouteConfigs = () => (
    <Router>
        <div>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
        </div>
    </Router>
);

export default RouteConfigs;