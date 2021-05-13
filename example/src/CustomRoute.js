import React, { Fragment } from "react";
import { Router, Route } from "react-router-dom";

export default ({routes}) => {
        // return (<Router>
        return <Fragment>
            {routes.map(route => {
            if((route.auth)) {
                const Component = route.auth;
                delete route.auth;
                return <Component  key={route.path} {...route} />
            }
            return <Route  key={route.path} {...route} ></Route>
        })}
        </Fragment>
    // </Router>)
    }