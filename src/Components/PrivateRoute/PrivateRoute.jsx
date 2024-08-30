import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <>
            <div className="flex justify-center min-h-screen items-center">
               Loading...
            </div>
        </>
    }
    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;