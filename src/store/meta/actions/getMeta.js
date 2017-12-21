import { apiProvider } from 'common';

import * as CONST from '../constants';
import { selectMetaShouldUpdate } from '../selectors';

const getMeta = ({ force = false } = {}) => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    if (!selectMetaShouldUpdate(force)(getState())) {
      return resolve();
    }

    dispatch({ type: CONST.META_GET });

    const request = {
      url: '/api/meta',
      method: 'GET',
      data: undefined,
    };

    const success = payload => {
      dispatch({
        type: CONST.META_GET_SUCCESS,
        payload,
      });
    };

    const failure = error => {
      dispatch({
        type: CONST.META_GET_FAILURE,
        payload: error.message,
      });
      throw error;
    };

    const promise = apiProvider(request)
      .then(success)
      .catch(failure);
    return resolve(promise);
  });

export default getMeta;
