import * as types from './actionTypes';

// generate unique id
const uid = () => Math.random().toString(34).slice(2);

export function addItem(uri) {
  return {
    type: types.ADD_ITEM,
    payload: {
      id: uid(),
      uri
    }
  };
}

export function removeItem(id) {
  return {
    type: types.REMOVE_ITEM,
    id
  };
}
