import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo1.png';
import { useAuth } from '../../context/AuthContext';
import { HeaderContainer, Logo, NavLink, NavLinks, RegisterButton } from './styles';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    const isAuthOrRegisterPage = pathname === '/authorization' || pathname === '/register';

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <HeaderContainer>
            <Link to="/">
                <Logo src={logo} alt="CheckUzh Logo" />
            </Link>

            {isAuthenticated && !isAuthOrRegisterPage && (
                <NavLinks>
                    <NavLink to="/">Головна</NavLink>
                    <NavLink to="/favorites">Уподобане</NavLink>
                    <NavLink to="/quests">Квест</NavLink>
                    <NavLink to="/profile">Акаунт</NavLink>
                </NavLinks>
            )}

            {!isAuthOrRegisterPage &&
                (isAuthenticated ? (
                    <RegisterButton onClick={handleLogout}>Вийти</RegisterButton>
                ) : (
                    <RegisterButton as={Link} to="/authorization">
                        Увійти/Реєстрація
                    </RegisterButton>
                ))}
        </HeaderContainer>
    );
};

Header.propTypes = {
    navigateTo: PropTypes.func,
};

export default Header;
