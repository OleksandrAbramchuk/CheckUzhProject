import styled from 'styled-components';

export const HeaderContent = styled.div`
    position: relative;
    text-align: center;
    color: white;
    z-index: 1;
`;

export const Subtitle = styled.p`
    font-size: 1.2em;
    margin-bottom: 30px;
`;

export const ContentSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const GreenBlock = styled.div`
    width: 100%;
    height: 300px;
    background-color: #61a474;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5em;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ImagePlaceholder = styled.div`
    width: 450px;
    height: 650px;
    box-shadow: 1px 15px 8px rgba(0, 0, 0, 0.37);
    background: linear-gradient(181deg, rgba(97, 164, 116, 0.22) 58%, rgb(97, 164, 116) 100%);
`;

export const Description = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    gap: 10px;
`;

export const PageButton = styled.button`
    padding: 8px 12px;
    border: none;
    background-color: #61a474;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
