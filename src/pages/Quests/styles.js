import styled from 'styled-components';

export const MapWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 500px;
    margin: 40px auto;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    background: #f8fdfb;
    padding: 10px;
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: #222f3e;
    margin-bottom: 40px;
    font-weight: 900;
    letter-spacing: 1.5px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
    padding: 0 20px;
`;
