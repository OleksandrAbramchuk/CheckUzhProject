import { refreshAccessToken } from "./auth";

export const authFetch = async (url, options = {}) => {
    let token = localStorage.getItem("accessToken");

    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {}),
            Authorization: `Bearer ${token}`,
    };

    let response = await fetch(url, {
        ...options,
        headers,
        credentials: "include",
    });

    if (response.status === 401) {
        const newToken = await refreshAccessToken();
        if (newToken) {
            response = await fetch(url, {
                ...options,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${token}`,
                },
                credentials: "include",
            });
        }
    }

    return response;
};