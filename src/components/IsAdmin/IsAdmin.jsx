import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";

function IsAdmin({ children }) {
    const { isLoggedIn, isLoading, user } = useContext(AuthContext);

    if (isLoading) {
        return <Loading />;
    }

    if (isLoggedIn && user.role === 'User') {
        return <Navigate to='/profile' />
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default IsAdmin;
