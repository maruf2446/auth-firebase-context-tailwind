import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" replacr={true}></Navigate>;
    
};

export default PrivateRoute;