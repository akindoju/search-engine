import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState('');

  const searchHandler = (event) => {
    event.preventDefault();
    setSearchBarValue(event.target.value);
    console.log(searchBarValue);
  };

  return (
    <div classname="searchContainer">
      <input
        type="text"
        className="input"
        placeholder="Enter keyword to search"
        onChange={searchHandler}
      />
      <button className="btn">Search</button>
    </div>
  );
};

export default SearchBar;
