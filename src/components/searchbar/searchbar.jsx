import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getResult } from '../../redux/result/result.actions';
import './searchbar.css';

const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const searchHandler = (event) => {
    event.preventDefault();
    setSearchBarValue(event.target.value);
  };

  const btnClickHandler = (event) => {
    event.preventDefault();
    if (searchBarValue.trim().length === 0) {
      alert(`Please insert keyword`);
    } else {
      dispatch(getResult(searchBarValue));
      history.push('/result');
    }
    // searchBarValue.trim().length === 0
    //   ? alert('Please insert a keyword')
    //   : null;
  };

  return (
    <div className="searchContainer">
      <h2>Animal Search</h2>
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
