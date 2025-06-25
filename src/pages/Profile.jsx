import React, { useState } from "react";

const Profile = () => {
    const [nickname, setNickname] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("Місцевий");
    const [email, setEmail] = useState("");
    const [biography, setBiography] = useState("");
    const [avatar, setAvatar] = useState();

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setAvatar(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Акаунт</h1>
            <div style={styles.wrapper}>
                {/* Profile Section */}
                <div style={styles.profileSection}>
                    <h2 style={styles.subHeader}>Профіль</h2>
                    <div style={styles.avatarWrapper}>
                        {avatar ? (
                            <img src={avatar} alt="Avatar" style={styles.avatar} />
                        ) : (
                            <div style={styles.placeholderAvatar}>Завантажте аватар</div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            style={styles.fileInput}
                        />
                    </div>
                    <label>
                        <strong>Нікнейм:</strong>
                        <input
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            placeholder="Введіть нікнейм"
                            style={styles.input}
                        />
                    </label>
                    <label>
                        <strong>Ім'я:</strong>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Введіть ім'я"
                            style={styles.input}
                        />
                    </label>
                    <label>
                        <strong>Статус:</strong>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            style={styles.select}
                        >
                            <option value="Місцевий">Місцевий</option>
                            <option value="Іноземець">Іноземець</option>
                        </select>
                    </label>
                    <label>
                        <strong>E-mail:</strong>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Введіть email"
                            style={styles.input}
                        />
                    </label>
                </div>

                {/* Biography Section */}
                <div style={styles.biographySection}>
                    <h2 style={styles.subHeader}>Біографія</h2>
                    <textarea
                        placeholder="Введіть біографію"
                        value={biography}
                        onChange={(e) => setBiography(e.target.value)}
                        style={styles.textarea}
                    />
                </div>

                {/* Activity Section */}
                <div style={styles.activitySection}>
                    <h2 style={styles.subHeader}>Активність</h2>
                    <p>
                        <strong>Уподобано:</strong> 0
                    </p>
                    <p>
                        <strong>Квест:</strong> 0/84
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f7f7",
        padding: "20px",
        textAlign: "center",
    },
    header: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    wrapper: {
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gridTemplateRows: "auto auto",
        gap: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
        alignItems: "start",
    },
    profileSection: {
        gridRow: "1 / span 2",
        border: "2px solid #90c695",
        borderRadius: "10px",
        backgroundColor: "#fff",
        padding: "20px",
        textAlign: "left",
    },
    subHeader: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    avatarWrapper: {
        textAlign: "center",
        marginBottom: "20px",
    },
    avatar: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: "10px",
    },
    placeholderAvatar: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: "#90c695",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "0.9rem",
        marginBottom: "10px",
    },
    fileInput: {
        fontSize: "0.9rem",
    },
    input: {
        width: "100%",
        padding: "5px",
        margin: "5px 0",
        fontSize: "1rem",
    },
    select: {
        padding: "5px",
        fontSize: "1rem",
    },
    biographySection: {
        border: "2px solid #90c695",
        borderRadius: "10px",
        backgroundColor: "#fff",
        padding: "20px",
        textAlign: "left",
    },
    textarea: {
        width: "95%",
        height: "70px",
        padding: "10px",
        fontSize: "1rem",
        resize: "none",
    },
    activitySection: {
        border: "2px solid #90c695",
        borderRadius: "10px",
        backgroundColor: "#fff",
        padding: "20px",
        textAlign: "left",
    },
};

export default Profile;
