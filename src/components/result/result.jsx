import React from 'react';
import './result.css';
import { useDispatch, useSelector } from 'react-redux';

const Result = () => {
  const result = useSelector((state) => state.result.result);
  const errorMessage = useSelector((state) => state.result.errorMessage);

  return (
    <div>
      {result.length > 0
        ? result.map((result) => {
            return <p>{result}</p>;
          })
        : errorMessage}
    </div>
  );
};

export default Result;
