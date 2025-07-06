import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 300px;
    height: 420px;
    padding: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background: #ffffff;
    border: 2px solid #61a474;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    text-align: center;
`;

export const Image = styled.img`
    width: 250px;
    height: 160px;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 10px;
`;

export const Title = styled.h2`
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
    margin-bottom: 8px;
`;

export const RatingContainer = styled.div`
    font-size: 1em;
    color: #444;
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeartButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    color: red;
`;

export const DetailsButton = styled.button`
    padding: 8px 16px;
    font-size: 1em;
    background-color: #61a474;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #4e8a5c;
    }
`;
