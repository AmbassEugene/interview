import {fetchUserApi} from '../api';
import {FETCHUSERS} from '../type';

export const fetchUsers = () => async (dispatch) => {
  try {
    const result = await fetch(fetchUserApi);
    const users = await result.json();
    dispatch({
      type: FETCHUSERS,
      payload: users,
    });
  } catch (error) {
    console.log(
      'An error occured while fetching data. Please reload app',
      error,
    );
  }
};
