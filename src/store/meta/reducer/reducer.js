import * as CONST from '../constants';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case CONST.META_GET:
      return {
        ...state,
        data: undefined,
        error: undefined,
        loading: true,
      };
    case CONST.META_GET_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: undefined,
        expires: Infinity,
        loading: false,
      };
    case CONST.META_GET_FAILURE:
      return {
        ...state,
        data: undefined,
        error: action.payload,
        expires: 0,
        loading: false,
      };
    case CONST.META_EXPIRE:
      return {
        ...state,
        expires: 0,
      };
    case CONST.META_RESET:
      return initialState;
    default:
      return state;
  }
};
