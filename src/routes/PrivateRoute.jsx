import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        return children;
    }
    // যদি ইউজার থাকে তাহলে রিটার্ন উপরেরটা না থাকলে নিচেরটা এক লাইনে 
    return <Navigate to="/login" state={{from: location}} ></Navigate>;
};

export default PrivateRoute;