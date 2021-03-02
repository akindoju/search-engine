import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './searchbar.css';

const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState('');
  const history = useHistory();

  const searchHandler = (event) => {
    event.preventDefault();
    setSearchBarValue(event.target.value);
    console.log(searchBarValue.length);
  };

  const btnClickHandler = (event) => {
    event.preventDefault();
    if (searchBarValue.trim().length === 0) {
      alert(`Please insert keyword`);
    } else {
      history.push('/result');
    }
    // searchBarValue.trim().length === 0
    //   ? alert('Please insert a keyword')
    //   : null;
  };

  return (
    <div className="searchContainer">
      <h2>Quick Search</h2>
      <input
        type="text"
        className="input"
        placeholder="Enter keyword to search"
        onChange={searchHandler}
      />
      <button className="btn" onClick={btnClickHandler}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
