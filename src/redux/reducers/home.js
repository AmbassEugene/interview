import {FETCHUSERS} from '../type';

export const home = (state = {}, action) => {
  switch (action.type) {
    case FETCHUSERS:
      return {...state, allUsers: action.payload};

    default:
      return state;
  }
};
