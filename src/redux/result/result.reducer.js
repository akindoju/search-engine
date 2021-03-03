import resultData from '../data';
import resultTypes from './result.types';

const INITIAL_STATE = {
  result: [],
  resultData: resultData,
  errorMessage: `Nothing found, please try again`,
};

const resultReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case resultTypes.GET_RESULT:
      const filteredData = state.resultData.filter((animal) =>
        animal.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        result: filteredData,
      };
    case resultTypes.NO_RESULT:
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};

export default resultReducer;
