import { useContext } from "react";
import { AuthContext } from "../ProvidersForBrandShop/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if(loading){
        console.log('object');
    }
    if(user){
        return children
    }
    return (
        <Navigate to='/login' state={location.pathname}>
            
        </Navigate>
    );
};

export default PrivateRoute;