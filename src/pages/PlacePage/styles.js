import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1100px;
    margin: 40px auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ffffff;
`;

export const TopSection = styled.div`
    display: flex;
    gap: 40px;
    align-items: flex-start;
    flex-wrap: nowrap;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    flex: 1 1 50%;
    max-width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
`;

export const InfoBlock = styled.div`
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Title = styled.h1`
    font-size: 36px;
    color: #2c3e50;
    margin-bottom: 10px;
`;

export const Location = styled.p`
    font-size: 16px;
    color: #7f8c8d;
    font-style: italic;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    font-size: 18px;
    line-height: 1.6;
    color: #34495e;
`;

export const BottomSection = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Rating = styled.div`
    font-size: 20px;
    color: #f39c12;
    font-weight: bold;
`;

export const FavoriteButton = styled.button`
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 12px 28px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #219150;
    }
`;

export const MapPlaceholder = styled.div`
    flex: 1 1 100%;
    margin-top: 30px;
    width: 100%;
    height: 300px;
    border-radius: 12px;
    background-color: #ecf0f1;
    border: 2px dashed #bdc3c7;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #95a5a6;
    font-size: 18px;
`;
