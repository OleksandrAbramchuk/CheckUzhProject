export const refreshAccessToken = async () => {
    console.log("🔍 Спроба оновити токен через /auth/refresh");

    try {
        const response = await fetch("http://localhost:5000/auth/refresh", {
            method: "POST",
            credentials: "include",
        });

        console.log("🧾 Response status:", response.status);

        const responseText = await response.text();
        console.log("🧾 Response text:", responseText);

        if (!response.ok) {
            throw new Error(`Не вдалося оновити токен. Статус: ${response.status}`);
        }

        const data = JSON.parse(responseText);
        localStorage.setItem("accessToken", data.accessToken);
        return data.accessToken;

    } catch (error) {
        console.error("❌ Помилка оновлення токена:", error.message || error);
        return null;
    }
};
