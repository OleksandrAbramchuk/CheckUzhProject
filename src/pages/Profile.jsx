import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";

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
    background-color: ${theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.textLight};
    font-size: 14px;
`;

const fileButtonStyles = css`
    display: inline-block;
    padding: 8px 16px;
    border: 2px dashed ${theme.colors.border};
    border-radius: 8px;
    background: transparent;
    color: ${theme.colors.primary};
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s;

    &:hover {
        background: ${theme.colors.primary}20;
        border-color: ${theme.colors.primary};
        color: white;
    }
`;

const FileInput = styled.input`
    display: none;
`;

const FileLabel = styled.label`
    ${fileButtonStyles}
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

const Input = styled.input`${inputStyles}`;
const Select = styled.select`${inputStyles}`;
const TextArea = styled.textarea`
    ${inputStyles}
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

const Profile = () => {
    const [nickname, setNickname] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("Місцевий");
    const [email, setEmail] = useState("");
    const [biography, setBiography] = useState("");
    const [avatar, setAvatar] = useState("");
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            setNickname(currentUser.username);
            setName(currentUser.name || "");
            setStatus(currentUser.status || "Місцевий");
            setEmail(currentUser.email || "");
            setBiography(currentUser.biography || "");
            setAvatar(currentUser.avatar || "");
        }
    }, []);

    const handleAvatarChange = useCallback((event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setAvatar(reader.result);
            reader.readAsDataURL(file);
        }
    }, []);

    const handleSaveProfile = useCallback(() => {
        if (!email.includes("@")) {
            alert("Невірний email");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updated = users.map((user) =>
            user.username === nickname ? { ...user, name, status, email, biography, avatar } : user
        );
        const updatedUser = updated.find((u) => u.username === nickname);

        localStorage.setItem("users", JSON.stringify(updated));
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    }, [nickname, name, status, email, biography, avatar]);

    return (
        <PageWrapper>
            <Container>
                <Card>
                    <Header>
                        <Title>Ваш Акаунт</Title>
                    </Header>
                    <Body>
                        <Section>
                            <SectionTitle>Профіль</SectionTitle>
                            <AvatarWrapper>
                                {avatar ? <Avatar src={avatar} alt="Avatar" /> : <Placeholder>Аватар</Placeholder>}
                                <FileLabel htmlFor="avatarUpload">Змінити фото</FileLabel>
                                <FileInput
                                    id="avatarUpload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                />
                            </AvatarWrapper>
                            <Input type="text" value={nickname} disabled placeholder="Нікнейм" />
                            <Input
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Ім'я"
                            />
                            <Select value={status} onChange={(event) => setStatus(event.target.value)}>
                                <option>Місцевий</option>
                                <option>Іноземець</option>
                            </Select>
                            <Input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="E-mail"
                            />
                        </Section>

                        <Section>
                            <SectionTitle>Біографія</SectionTitle>
                            <TextArea
                                value={biography}
                                onChange={(event) => setBiography(event.target.value)}
                                placeholder="Ваша біографія..."
                            />
                        </Section>

                        <Section>
                            <SectionTitle>Активність</SectionTitle>
                            <div><strong>Уподобано:</strong> 0</div>
                            <div><strong>Квест:</strong> 0/84</div>
                        </Section>

                        <Button onClick={handleSaveProfile}>Зберегти профіль</Button>
                        {saved && <SaveMessage>✅ Профіль успішно збережено!</SaveMessage>}
                    </Body>
                </Card>
            </Container>
        </PageWrapper>
    );
};

export default React.memo(Profile);
