import React, { createContext, useContext, useEffect, useState } from 'react';
import { refreshAccessToken } from '../utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const newToken = await refreshAccessToken();
                if (newToken) {
                    setAccessToken(newToken);
                    localStorage.setItem('accessToken', newToken);
                }
            } catch (err) {
                console.error('❌ initAuth error:', err);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const login = (token) => {
        setAccessToken(token);
        localStorage.setItem('accessToken', token);
    };

    const logout = async () => {
        try {
            await fetch('http://localhost:5000/auth/logout', {
                method: 'POST',
                credentials: 'include',
            });
        } catch (error) {
            console.error('Помилка при виході:', error);
        }

        setAccessToken('');
        localStorage.removeItem('accessToken');
    };

    return (
        <AuthContext.Provider value={{ accessToken, isAuthenticated: !!accessToken, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
