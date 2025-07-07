import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getFavorites } from '../../utils/favorites';

import {
    PageWrapper,
    Container,
    Card,
    Header,
    Title,
    Body,
    Section,
    SectionTitle,
    AvatarWrapper,
    Avatar,
    Placeholder,
    Input,
    Select,
    TextArea,
    Button,
    SaveMessage,
} from './styles';


const getInitials = (name) => {
    return name
        .trim()
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();
};

const getColorFromName = (name) => {
    const colors = ['#60ccad', '#f39c12', '#3498db', '#e74c3c', '#9b59b6', '#2ecc71'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
};

const Profile = () => {
    const { accessToken, loading: authLoading } = useAuth();

    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [userType, setUserType] = useState('local');
    const [email, setEmail] = useState('');
    const [biography, setBiography] = useState('');
    const [avatar, setAvatar] = useState('');
    const [saved, setSaved] = useState(false);
    const [localLoading, setLocalLoading] = useState(false);
    const [error, setError] = useState('');
    const [favoritesCount, setFavoritesCount] = useState(0);
    const [foundStatues, setFoundStatues] = useState([]);

    useEffect(() => {
        setLocalLoading(true);

        if (localLoading || !accessToken) return;

        Promise.all([
            fetch('http://localhost:5000/users/me', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
            getFavorites()
        ])
            .then(async ([userRes, favorites]) => {
                if (!userRes.ok) throw new Error('Не вдалося завантажити профіль');
                const userData = await userRes.json();

                setNickname(userData.nickname);
                setName(userData.firstName || '');
                setUserType(userData.userType || 'local');
                setEmail(userData.email || '');
                setBiography(userData.bio || '');
                setAvatar(userData.avatarUrl || '');
                setFavoritesCount(favorites.length || 0);
                setError('');
            })
            .catch((err) => {
                setError(err.message);
                console.error('Помилка при завантаженні профілю:', err);
            })
            .finally(() => setLocalLoading(false));
    }, [accessToken, authLoading]);

    const fetchFoundStatues = async  ()=> {
        try {
            const res = await fetch('http://localhost:5000/quest/me',{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },});
            if (!res.ok) throw new Error('Помилка при отриманні статуй');
            const data = await res.json();
            setFoundStatues(data.foundPlaces.length);
        } catch (err) {
            //setError(err.message || 'Щось пішло не так...');
        }
    };

    fetchFoundStatues();

    const handleSaveProfile = async () => {
        setLocalLoading(true);
        setError('');
        setSaved(false);
        try {
            const res = await fetch('http://localhost:5000/users/me', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    firstName: name,
                    email,
                    bio: biography,
                    avatarUrl: avatar,
                    userType,
                }),
            });
            if (!res.ok) throw new Error('Не вдалося зберегти профіль');
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (err) {
            setError(err.message);
            console.error('Помилка збереження профілю:', err);
        } finally {
            setLocalLoading(false);
        }
    };

    return (
        <PageWrapper>
            <Container>
                <Card>
                    <Header>
                        <Title>Ваш Акаунт</Title>
                    </Header>
                    <Body>
                        {localLoading && <p>Завантаження...</p>}
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <Section>
                            <SectionTitle>Профіль</SectionTitle>
                            <AvatarWrapper>
                                {avatar ? (
                                    <Avatar src={avatar} alt="Avatar" />
                                ) : (
                                    <Placeholder bgColor={getColorFromName(name || nickname || '👤')}>
                                        {getInitials(name || nickname || '👤')}
                                    </Placeholder>
                                )}
                            </AvatarWrapper>
                            <Input type="text" value={nickname} disabled placeholder="Нікнейм" />
                            <Input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Ім'я"
                            />
                            <Select value={userType} onChange={(e) => setUserType(e.target.value)}>
                                <option value="local">Місцевий</option>
                                <option value="tourist">Іноземець</option>
                            </Select>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail"
                            />
                        </Section>

                        <Section>
                            <SectionTitle>Біографія</SectionTitle>
                            <TextArea
                                value={biography}
                                onChange={(e) => setBiography(e.target.value)}
                                placeholder="Ваша біографія..."
                            />
                        </Section>

                        <Section>
                            <SectionTitle>Активність</SectionTitle>
                            <div>
                                <strong>Уподобано:</strong> {favoritesCount}
                            </div>
                            <div>
                                <strong>Квест:</strong> {foundStatues}/74
                            </div>
                        </Section>
                        <Button onClick={handleSaveProfile} disabled={localLoading}>
                            {localLoading ? 'Збереження...' : 'Зберегти профіль'}
                        </Button>
                        {saved && <SaveMessage>✅ Профіль успішно збережено!</SaveMessage>}
                    </Body>
                </Card>
            </Container>
        </PageWrapper>
    );
};

export default React.memo(Profile);
