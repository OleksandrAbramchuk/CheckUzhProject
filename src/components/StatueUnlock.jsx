import PropTypes from "prop-types";
import React, { useState } from "react";

function StatueUnlock({ statueName, imageUrl, correctCoordinates }) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [inputCoordinates, setInputCoordinates] = useState("");

    const handleUnlock = () => {
        if (inputCoordinates === correctCoordinates) {
            setIsUnlocked(true);
        } else {
            alert("Невірні координати. Спробуйте ще раз.");
        }
    };

    return (
        <div
            style={{
                border: "1px solid #4CAF50",
                borderRadius: "10px",
                padding: "20px",
                width: "200px",
                textAlign: "center",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
            }}
        >
            <div style={{ position: "relative", marginBottom: "10px" }}>
                <img
                    src={imageUrl}
                    alt={statueName}
                    style={{
                        width: "100%",
                        height: "auto",
                        filter: isUnlocked ? "none" : "blur(4px)",
                        transition: "filter 0.3s ease"
                    }}
                />
                {!isUnlocked && (
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "24px",
                            color: "#333",
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            borderRadius: "50%",
                            padding: "10px"
                        }}
                    >
                        🔒
                    </div>
                )}
            </div>
            <h3>{statueName}</h3>
            {isUnlocked ? (
                <div style={{ fontSize: "24px", color: "#4CAF50" }}>✔ Знайдено!</div>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Введіть GPS-координати"
                        value={inputCoordinates}
                        onChange={(event) => setInputCoordinates(event.target.value)} // ESLint: більш описове ім'я для 'e'
                        style={{
                            width: "100%",
                            padding: "5px",
                            marginBottom: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc"
                        }}
                    />
                    <button
                        onClick={handleUnlock}
                        style={{
                            backgroundColor: "#4CAF50",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            padding: "8px 16px",
                            cursor: "pointer"
                        }}
                    >
                        Розблокувати
                    </button>
                </>
            )}
        </div>
    );
}

StatueUnlock.propTypes = {
    statueName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    correctCoordinates: PropTypes.string.isRequired,
};

export default StatueUnlock;
