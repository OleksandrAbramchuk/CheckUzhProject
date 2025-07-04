import PropTypes from 'prop-types';
import React from 'react';
import { StyledInput } from './styles';

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
