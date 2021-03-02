import React from 'react';
import './result.css';
import { useSelector } from 'react-redux';

const Result = () => {
  const result = useSelector((state) => state.result.result);

  return (
    <div>
      {result.map((result) => {
        return <p>{result}</p>;
      })}
    </div>
  );
};

export default Result;
