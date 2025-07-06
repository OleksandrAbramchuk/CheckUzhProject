import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    padding: 0px;
    opacity: 66%;
    background: #000000;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 250px;
    height: 200px;
    background: transparent;
`;

export const NavLinks = styled.div`
    width: 450px;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 15px;
    margin-left: 450px;
`;

export const NavLink = styled(Link)`
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    text-decoration: none;
    &:hover {
        color: #ffffff;
    }
`;

export const RegisterButton = styled.button`
    display: inline-block;
    width: 191px;
    height: 48px;
    padding: 0px 16px;
    box-shadow: 0px 4px 4px rgb(44, 44, 44);
    background: #61a474;
    color: #ffffff;
    border: 2px solid #61a474;
    border-radius: 9px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    left: -10px;

    &:hover {
        background: #4e8c5e;
    }
`;
