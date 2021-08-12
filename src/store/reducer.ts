import * as types from './ActionTypes';

const initialState = {
  friends: [],
  number: 0,
  searchValue: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FRIENDS_LIST:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
  return state;
};

export default rootReducer;
