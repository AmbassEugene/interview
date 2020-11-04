import {FETCHUSERS, USERDETAILS} from '../type';
export const details = (state = {}, action) => {
  switch (action.type) {
    case USERDETAILS:
      return {...state, userDetails: action.payload};

    default:
      return state;
  }
};
