import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) =>{
    return (
        <Route> 
            { 
                ()=>   setTimeout(props.loggedIn, 1000) ? <Component {...props} /> : <Redirect to="/" />      
            }
        </Route>
    )
}

export default ProtectedRoute;