import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 900px;
    height: 300px;
    padding: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background: #f0f0f0;
    border: 3px solid #61a474;
    border-radius: 49px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
`;

export const Image = styled.img`
    width: 400px;
    height: 280px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.42);
    border-radius: 12px;
    margin-right: 20px;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const Title = styled.h2`
    font-size: 25px;
    font-weight: bold;
    margin: 0;
    margin-top: 15px;
`;

export const Description = styled.p`
    font-size: 18px;
    color: #666;
    margin: 10px 0;
    line-height: 1.4;
    flex-grow: 1;
`;

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #444;
`;

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 10px;
`;

export const HeartButton = styled.button`
    background: none;
    border: none;
    font-size: 48px;
    cursor: pointer;
    color: ${(properties) => (properties.isLiked ? 'red' : '#ccc')};
    margin-right: 10px;
    transition: color 0.3s;

    &:hover {
        color: red;
    }
`;
