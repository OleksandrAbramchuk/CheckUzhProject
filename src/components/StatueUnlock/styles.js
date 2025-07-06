import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #4caf50;
    border-radius: 10px;
    padding: 20px;
    width: 200px;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const ImageWrapper = styled.div`
    position: relative;
    margin-bottom: 10px;
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
    font-size: 24px;
    color: #333;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    padding: 10px;
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
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
`;
