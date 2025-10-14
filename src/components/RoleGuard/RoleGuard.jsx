import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const RoleGuard = ({
    children,
    allowedRoles,
    redirectOnDeny = false,
    redirectTo = "/login"
}) => {

    const { currentUser, loading, isAuthenticated } = useAuth();

    if (loading) {
        return null;
    }

    if (!isAuthenticated) {
        return redirectOnDeny ? <Navigate to={redirectTo} replace /> : null;
    }

    const hasAccess = currentUser && allowedRoles.includes(currentUser.role);
    console.log(hasAccess);

    if (!hasAccess) {
        return redirectOnDeny ? <Navigate to={redirectTo} replace /> : null;
    }

    return children;
}
