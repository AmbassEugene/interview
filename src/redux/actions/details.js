import {USERDETAILS} from '../type';

export const getUserDetails = (data) => (dispatch) => {
  try {
    dispatch({
      type: USERDETAILS,
      payload: data,
    });
  } catch (error) {
    console.log('An error occured', error);
  }
};
