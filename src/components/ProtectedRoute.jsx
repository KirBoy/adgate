import React  from 'react';
import {Navigate} from "react-router";

const ProtectedRoute = ({children }) => {

    if (window.localStorage.getItem('token')) {
        return children
    }

    return (
        <Navigate to='/login'/>
    );

};

export default ProtectedRoute;



