import * as types from '../../redux/types/auth.type';

const initialState = {
  pending: false,
  user: null,
  errors: [],
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
        user: action.payload.data,
        errors: [],
        pending: false,
      };
    }
    case types.GET_SIGN_IN_FAILURE: {
      return {
        ...state,
        errors: action.payload?.data || [],
        pending: false,
      };
    }
    case types.SIGN_OUT: {
      return {
        ...state,
        user: null,
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
        user: action.payload.data,
        pending: false,
      };
    }
    case types.CREATE_ACCOUNT_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case types.CREATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        errors: [],
        pending: false,
      };
    }
    case types.CREATE_ACCOUNT_FAILURE: {
      return {
        ...state,
        errors: action.payload.data,
        pending: false,
      };
    }
    case types.FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case types.FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        errors: [],
        pending: false,
      };
    }
    case types.FORGOT_PASSWORD_FAILURE: {
      return {
        ...state,
        errors: action.payload.data,
        pending: false,
      };
    }
    case types.RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case types.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        errors: [],
        pending: false,
      };
    }
    case types.RESET_PASSWORD_FAILURE: {
      return {
        ...state,
        errors: action.payload.data,
        pending: false,
      };
    }
    case types.VALIDATE_TOKEN_FAILURE: {
      return {
        ...state,
        pending: false,
      };
    }

    case types.CLEAR_AUTH_ERROR: {
      return {
        ...state,
        errors: [],
      };
    }
    default:
      return state;
  }
};

export default reducer;
