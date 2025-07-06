import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 250px;
    height: 40px;
    padding: 0px 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
    background: #61a474;
    color: #ffffff;
    border: 2px solid #61a474;
    border-radius: 9px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;
