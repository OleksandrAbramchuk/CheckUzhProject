import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid #3b7a57;
    border-radius: 16px;
    padding: 24px 20px 30px;
    width: 220px;
    text-align: center;
    background: #f9fdf9;
    box-shadow: 0 8px 20px rgba(59, 122, 87, 0.25);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: default;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 16px 30px rgba(59, 122, 87, 0.35);
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    margin-bottom: 16px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const StatueImage = styled.img`
    width: 100%;
    height: auto;
    filter: ${({ isUnlocked }) => (isUnlocked ? 'none' : 'blur(4px)')};
    transition: filter 0.3s ease;
`;

export const LockIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 28px;
    color: #3b7a57;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    padding: 14px;
    box-shadow: 0 0 8px rgba(59, 122, 87, 0.6);
`;

export const Title = styled.h3`
    margin: 0 0 10px 0;
`;

export const UnlockMessage = styled.div`
    font-size: 24px;
    color: #4caf50;
`;

export const Input = styled.input`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const UnlockButton = styled.button`
    background: linear-gradient(90deg, #3b7a57 0%, #61a474 100%);
    color: white;
    border: none;
    border-radius: 10px;
    padding: 12px 24px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(59, 122, 87, 0.4);
    transition: background 0.4s ease, box-shadow 0.3s ease, transform 0.2s ease;

    &:hover {
        background: linear-gradient(90deg, #2f5e41 0%, #4a7a54 100%);
        box-shadow: 0 10px 20px rgba(43, 92, 34, 0.6);
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(43, 92, 34, 0.5);
    }
`;
