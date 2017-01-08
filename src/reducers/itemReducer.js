import * as types from '../actions/actionTypes';

const todoReducer = (state = [], action) => {
  switch(action.type) {

    case types.ADD_ITEM:
      return [
        action.payload,
        ...state
      ];

    case types.REMOVE_ITEM:
      return state.filter(item => {
        return item.id !== action.id;
      });

    default:
      return state;
  }

}

export default todoReducer;
