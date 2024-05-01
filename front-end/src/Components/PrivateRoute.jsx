import React from 'react';
import {Navigate} from "react-router-dom";

function PrivateRoute({children}) {
 const token=localStorage.getItem("AdminToken");
 if(!token){
    return <Navigate to={"/adminlogin"} />
 }
 return children
}

export default PrivateRoute