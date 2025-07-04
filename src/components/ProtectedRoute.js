import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { accessToken, loading } = useAuth();

    if (loading) return <div>Завантаження...</div>;

    return accessToken ? children : <Navigate to="/authorization" />;
};

export default ProtectedRoute;
