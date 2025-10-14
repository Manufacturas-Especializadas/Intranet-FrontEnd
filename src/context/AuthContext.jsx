import { createContext, useContext, useEffect, useState } from "react";
import authService from "../api/services/authService";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usuarso dentro de un AuthProvider");
    }

    return context;
}

const parseJwt = (token) => {
    try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                .join("")
        );

        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error("Error al decodificar el token");
        return null;
    }
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            const decoded = parseJwt(token);

            if (decoded && decoded.exp * 1000 > Date.now()) {
                setCurrentUser({
                    id: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
                    name: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
                    role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
                });
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem("authToken");
            }
        }
        setLoading(false);
    }, []);

    const login = async (payRollNumber, password) => {
        try {
            const response = await authService.login({ payRollNumber, password });
            const { accessToken, refreshToken } = response.data;
            localStorage.setItem("authToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            const decoded = parseJwt(accessToken);
            if (!decoded) throw new Error("Token inválido");

            const user = {
                id: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
                name: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
                role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
            };

            setCurrentUser(user);
            setIsAuthenticated(true);

            return { success: true };
        } catch (error) {
            console.error("Error en login", error);
            localStorage.removeItem("authToken");
            return { success: false, message: "Credenciales incorrectas" };
        }
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setCurrentUser(null);
        setIsAuthenticated(false);
    };

    const value = {
        currentUser,
        isAuthenticated,
        loading,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}