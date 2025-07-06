import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { Button, Card, ErrorText, Input, LinkText, PageWrapper, Title } from './styles';

const AuthorizationPage = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({ nickname: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
                credentials: 'include',
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || 'Помилка логіну');

            if (data.accessToken) {
                login(data.accessToken);
                navigate('/profile');
            }
        } catch (error_) {
            setError(error_.message);
        }
    };

    return (
        <PageWrapper>
            <Card onSubmit={handleSubmit}>
                <Title>Вхід</Title>
                {error && <ErrorText>{error}</ErrorText>}
                <Input
                    type="text"
                    name="nickname"
                    placeholder="Нікнейм"
                    value={formData.nickname}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={handleChange}
                />
                <Button type="submit">Увійти</Button>
                <LinkText>
                    Немає акаунту? <Link to="/register">Зареєструватися</Link>
                </LinkText>
            </Card>
        </PageWrapper>
    );
};

export default AuthorizationPage;
