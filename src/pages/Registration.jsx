import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #d3d3d3; /* Сірий фон */
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border: 2px solid #61a474;
    width: 400px;
`;

const Title = styled.h2`
    font-size: 2em;
    color: #000;
    margin-bottom: 20px;
`;

const Label = styled.label`
    width: 100%;
    font-size: 1em;
    color: #333;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 1em;
    border: 2px solid #61a474;
    border-radius: 8px;
    outline: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
        border-color: #4e8d5e;
    }
`;

const LoginButton = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 1em;
    color: white;
    background-color: #61a474;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #4e8d5e;
    }
`;

const RegisterLink = styled.p`
    margin-top: 15px;
    font-size: 0.9em;
    color: #333;

    a {
        color: #61a474;
        font-weight: bold;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const RegistrationPage = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        if (existingUsers.find((u) => u.username === formData.username)) {
            setMessage("Користувач з таким нікнеймом вже існує");
            return;
        }

        const newUser = {
            ...formData,
            name: "",
            email: "",
            biography: "",
            avatar: "",
        };

        localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
        setMessage("Реєстрація успішна!");
        navigate("/authorization");
    };

    return (
        <Container>
            <LoginForm onSubmit={handleSubmit}>
                <Title>Реєстрація</Title>
                {message && <p>{message}</p>}
                <Label>Нікнейм</Label>
                <Input
                    type="text"
                    name="username"
                    placeholder="Введіть нікнейм"
                    value={formData.username}
                    onChange={handleChange}
                />
                <Label>Пароль</Label>
                <Input
                    type="password"
                    name="password"
                    placeholder="Введіть пароль"
                    value={formData.password}
                    onChange={handleChange}
                />
                <LoginButton type="submit">Зареєструватися</LoginButton>
                <RegisterLink>
                    Є аккаунт? <a href="/authorization">Увійти</a>
                </RegisterLink>
            </LoginForm>
        </Container>
    );
};

export default RegistrationPage;
