import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Card, ErrorText, Input, LinkText, Message, PageWrapper, Title } from './styles';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({ nickname: '', password: '' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const res = await fetch(`http://localhost:5000/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nickname: formData.nickname,
                    password: formData.password,
                }),
                credentials: 'include',
            });

            if (!res.ok) {
                const errorData = await res.json();
                setError(errorData.message || 'Помилка реєстрації');
                return;
            }

            setMessage('✅ Реєстрація успішна! Перенаправлення...');
            setTimeout(() => navigate('/authorization'), 1500);
        } catch {
            setError('Щось пішло не так. Спробуйте ще раз.');
        }
    };

    return (
        <PageWrapper>
            <Card onSubmit={handleSubmit}>
                <Title>Реєстрація</Title>
                {error && <ErrorText>{error}</ErrorText>}
                {message && <Message>{message}</Message>}
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
                <Button type="submit">Зареєструватись</Button>
                <LinkText>
                    Вже є акаунт? <a href="/authorization">Увійти</a>
                </LinkText>
            </Card>
        </PageWrapper>
    );
};

export default RegistrationPage;
