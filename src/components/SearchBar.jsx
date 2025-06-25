import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 550px;
    height: 40px;
    box-shadow: 0px 6px 4px rgba(114, 21, 77, 0.58);
    background: #ffffff;
    color: #c0c0c0;
    border: 1px solid #232323;
    border-radius: 32px;
    font-family: Helvetica, sans-serif;
    font-weight: 400;
    font-size: 24px;
    text-align: left;
    padding: 0 20px;
    outline: none;

    ::placeholder {
        color: #c0c0c0;
    }
`;

const SearchBar = ({ placeholder = 'Пошук...', onSearch }) => {
    return (
        <StyledInput
            type="text"
            placeholder={placeholder}
            onKeyPress={(event) => {
                if (event.key === 'Enter' && onSearch) {
                    onSearch(event.target.value);
                }
            }}
        />
    );
};
SearchBar.propTypes = {
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
};
export default SearchBar;
