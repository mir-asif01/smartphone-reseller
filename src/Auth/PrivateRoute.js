import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext)

    if(!user){
      return <Navigate to='/login'></Navigate>
    }
    if(user){
        return children
    }
};

export default PrivateRoute;