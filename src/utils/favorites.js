import { authFetch } from '../utils/authFetch';

export const addToFavorites = async (placeId) => {
    return await authFetch('http://localhost:5000/users/me/favorites', {
        method: 'POST',
        body: JSON.stringify({ placeId }),
    });
};

export const removeFromFavorites = async (placeId) => {
    return await authFetch(`http://localhost:5000/users/me/favorites/${placeId}`, {
        method: 'DELETE',
    });
};

export const getFavorites = async () => {
    const res = await authFetch('http://localhost:5000/users/me/favorites');
    return res.ok ? await res.json() : [];
};
