import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return(
        <div className='search'>
            <input
                className="searchBox"
                type="search"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}