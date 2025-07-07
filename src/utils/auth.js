export const refreshAccessToken = async () => {
    try {
        const response = await fetch('http://localhost:5000/auth/refresh', {
            method: 'POST',
            credentials: 'include',
        });

        if (!response.ok) throw new Error('Не вдалося оновити токен');

        const data = await response.json();
        localStorage.setItem('accessToken', data.accessToken);
        return data.accessToken;
    } catch (error) {
        console.error('❌ Помилка оновлення токена:', error);
        return null;
    }
};
