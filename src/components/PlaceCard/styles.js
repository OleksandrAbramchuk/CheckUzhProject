import styled from 'styled-components';

export const CardContainer = styled.div`
    max-width: 860px;
    display: flex;
    flex-direction: row;
    background: #ffffff;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    margin: 24px auto;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        max-width: 95%;
    }
`;

export const Image = styled.img`
    width: 300px;
    height: auto;
    object-fit: cover;
    flex-shrink: 0;

    @media (max-width: 768px) {
        width: 100%;
        height: 220px;
    }
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 24px;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 12px 0;
`;

export const Description = styled.p`
    font-size: 16px;
    color: #555;
    line-height: 1.6;
    margin: 0 0 16px 0;
    flex-grow: 1;
`;

export const RatingContainer = styled.div`
    font-size: 18px;
    color: #f39c12;
    font-weight: 500;
`;

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-top: auto;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const HeartButton = styled.button`
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: ${(props) => (props.isLiked ? '#e74c3c' : '#bdc3c7')};
    transition: color 0.3s;

    &:hover {
        color: #e74c3c;
    }
`;
