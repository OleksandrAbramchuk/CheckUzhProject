import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useAuth } from '../../context/AuthContext';

const theme = {
    colors: {
        background: '#F4F7FA',
        cardBg: '#FFFFFF',
        primary: '#6fcb65',
        accent: '#2cdc49',
        textDark: '#2C3E50',
        textLight: '#7F8C8D',
        border: '#E0E6ED',
        shadow: 'rgba(0, 0, 0, 0.08)',
        error: '#E74C3C',
    },
};

const PageWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: ${theme.colors.background};
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
`;

const Card = styled.div`
    background-color: ${theme.colors.cardBg};
    border-radius: 12px;
    box-shadow: 0 4px 16px ${theme.colors.shadow};
    overflow: hidden;
`;

const Header = styled.div`
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent});
    color: white;
    padding: 24px;
    text-align: center;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 24px;
    font-weight: 600;
`;

const Body = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const SectionTitle = styled.h2`
    margin: 0;
    font-size: 18px;
    color: ${theme.colors.textDark};
    font-weight: 500;
`;

const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${theme.colors.border};
`;

const Placeholder = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor || theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    box-shadow: 0 2px 8px ${theme.colors.shadow};
`;

const inputStyles = css`
    width: 100%;
    padding: 12px 16px;
    border: 1px solid ${theme.colors.border};
    border-radius: 8px;
    font-size: 14px;
    color: ${theme.colors.textDark};
    transition: border-color 0.2s;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: ${theme.colors.primary};
        box-shadow: 0 0 0 2px ${theme.colors.primary}40;
    }
`;

const Input = styled.input`
    ${inputStyles}
`;
const Select = styled.select`
    ${inputStyles}
`;
const TextArea = styled.textarea`
    ${inputStyles};
    min-height: 120px;
    resize: vertical;
`;

const Button = styled.button`
    align-self: flex-start;
    padding: 12px 24px;
    background-color: ${theme.colors.primary};
    color: white;
    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background-color: ${theme.colors.primary}cc;
    }
`;

const SaveMessage = styled.div`
    color: ${theme.colors.accent};
    font-size: 14px;
    margin-top: 8px;
`;
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
    const [foundStatues, setFoundStatues] = useState([]);

    useEffect(() => {
        setLocalLoading(true);

        if (localLoading || !accessToken) return;
        fetch('http://localhost:5000/users/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error('Не вдалося завантажити профіль');
                return res.json();
            })
            .then((data) => {
                setNickname(data.nickname);
                setName(data.firstName || '');
                setUserType(data.userType || 'local');
                setEmail(data.email || '');
                setBiography(data.bio || '');
                setAvatar(data.avatarUrl || '');
                setError('');
            })
            .catch((err) => {
                setError(err.message);
                console.error('Помилка при завантаженні профілю:', err);
            })
            .finally(() => setLocalLoading(false));

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
    }, [accessToken, authLoading]);

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
                                <strong>Уподобано:</strong> 0
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
