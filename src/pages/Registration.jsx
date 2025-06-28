import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const theme = {
    colors: {
        background: '#F4F7FA',
        cardBg: '#FFFFFF',
        primary: '#60ccad',
        accent: '#5ae5a3',
        textDark: '#2C3E50',
        border: '#E0E6ED',
        shadow: 'rgba(0, 0, 0, 0.08)',
        error: '#E74C3C',
    },
};

const PageWrapper = styled.div`
    min-height: 100vh;
    background-color: ${theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Card = styled.form`
    background-color: ${theme.colors.cardBg};
    border-radius: 12px;
    box-shadow: 0 4px 16px ${theme.colors.shadow};
    width: 100%;
    max-width: 400px;
    padding: 32px;
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: ${theme.colors.textDark};
    text-align: center;
    margin-bottom: 24px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    border: 1px solid ${theme.colors.border};
    border-radius: 8px;
    font-size: 14px;
    margin-bottom: 16px;
    transition: border 0.3s;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: ${theme.colors.primary};
        box-shadow: 0 0 0 2px ${theme.colors.primary}40;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: ${theme.colors.primary};
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.3s;

    &:hover {
        background-color: ${theme.colors.primary}cc;
    }
`;

const Message = styled.p`
    color: ${theme.colors.accent};
    font-size: 14px;
    margin-bottom: 10px;
`;

const ErrorText = styled.p`
    color: ${theme.colors.error};
    font-size: 14px;
    margin-bottom: 8px;
`;

const LinkText = styled.p`
    margin-top: 16px;
    text-align: center;
    font-size: 14px;

    a {
        color: ${theme.colors.primary};
        font-weight: 500;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const RegistrationPage = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.find((u) => u.username === formData.username)) {
            setError("Користувач з таким нікнеймом вже існує");
            return;
        }

        const newUser = {
            ...formData,
            name: "",
            email: "",
            biography: "",
            avatar: "",
        };

        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        setMessage("✅ Реєстрація успішна! Перенаправлення...");
        setTimeout(() => navigate("/authorization"), 1500);
    };

    return (
        <PageWrapper>
            <Card onSubmit={handleSubmit}>
                <Title>Реєстрація</Title>
                {error && <ErrorText>{error}</ErrorText>}
                {message && <Message>{message}</Message>}
                <Input
                    type="text"
                    name="username"
                    placeholder="Нікнейм"
                    value={formData.username}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={handleChange}
                />
                <Button type="submit">Зареєструватись</Button>
                <LinkText>
                    Вже є акаунт? <a href="/authorization">Увійти</a>
                </LinkText>
            </Card>
        </PageWrapper>
    );
};

export default RegistrationPage;
