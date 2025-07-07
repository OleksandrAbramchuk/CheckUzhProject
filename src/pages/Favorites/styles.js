import styled from 'styled-components';

export const PageContainer = styled.div`
    padding: 50px 30px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c2d5ea 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: #222f3e;
    margin-bottom: 40px;
    font-weight: 900;
    letter-spacing: 1.5px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1280px;
    padding: 0 15px;
`;
