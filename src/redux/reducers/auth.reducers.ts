import * as types from '../../redux/types/auth.type';

const initialState = {
  pending: false,
  auth: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_SIGN_IN_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case types.GET_SIGN_IN_SUCCESS: {
      return {
        ...state,
        auth: action.payload.data,
        pending: false,
      };
    }
    case types.GET_SIGN_IN_FAILURE: {
      return {
        ...state,
        auth: action.payload.data,
        pending: false,
      };
    }
    case types.VALIDATE_TOKEN_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case types.VALIDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        auth: action.payload.data,
        pending: false,
      };
    }
    case types.VALIDATE_TOKEN_FAILURE: {
      return {
        ...state,
        auth: action.payload.data,
        pending: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
