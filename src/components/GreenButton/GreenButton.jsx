import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './styles';

const GreenButton = ({ children, onClick }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

GreenButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

GreenButton.defaultProps = {
    onClick: () => {},
};

export default GreenButton;
