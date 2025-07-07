import styled, { css } from 'styled-components';

export const theme = {
    colors: {
        background: '#f4f7fa',
        cardBg: '#FFFFFF',
        primary: '#8ec89d',
        accent: '#8ec89d',
        textDark: '#2C3E50',
        textLight: '#7F8C8D',
        border: '#E0E6ED',
        shadow: 'rgba(0, 0, 0, 0.08)',
        error: '#E74C3C',
    },
};

export const PageWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: ${theme.colors.background};
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 720px;
`;

export const Card = styled.div`
    background-color: ${theme.colors.cardBg};
    border-radius: 12px;
    box-shadow: 0 4px 16px ${theme.colors.shadow};
    overflow: hidden;
`;

export const Header = styled.div`
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent});
    color: #ffffff;
    padding: 24px;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 40px;
    font-weight: 900;
    letter-spacing: 1.5px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 24px;
    font-weight: 600;
`;

export const Body = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const SectionTitle = styled.h2`
    margin: 0;
    font-size: 18px;
    color: ${theme.colors.textDark};
    font-weight: 500;
`;

export const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${theme.colors.border};
`;

export const Placeholder = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${(properties) => properties.bgColor || theme.colors.primary};
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

export const Input = styled.input`
    ${inputStyles}
`;
export const Select = styled.select`
    ${inputStyles}
`;
export const TextArea = styled.textarea`
    ${inputStyles}
    min-height: 120px;
    resize: vertical;
`;

export const Button = styled.button`
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

export const SaveMessage = styled.div`
    color: ${theme.colors.accent};
    font-size: 14px;
    margin-top: 8px;
`;
