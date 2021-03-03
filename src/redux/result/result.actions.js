import resultTypes from './result.types';

export const getResult = (searchKey) => {
  return { type: resultTypes.GET_RESULT, payload: searchKey };
};

export const noResult = (error) => {
  return { type: resultTypes.NO_RESULT, payload: error };
};
