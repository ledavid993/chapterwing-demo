import * as types from '../types/auth.type';
import { authService } from '../services';
import jwtDecode from 'jwt-decode';

export const signIn = (email: string, password: string) => async (
  dispatch: any
): Promise<boolean> => {
  try {
    dispatch({
      type: types.GET_SIGN_IN_REQUEST,
    });

    await authService.signIn(email, password);

    const decoded = localStorage.getItem('accessToken') || '';

    dispatch({
      type: types.GET_SIGN_IN_SUCCESS,
      payload: {
        data: jwtDecode(decoded),
      },
    });

    return true;
  } catch (e) {
    let errors = [];
    if (typeof e.message === 'string') errors.push(e.message);
    else errors = e.message;
    dispatch({
      type: types.GET_SIGN_IN_FAILURE,
      payload: {
        data: errors,
      },
    });
    return false;
  }
};

export const createAccount = (email: string, username: string, password: string) => async (
  dispatch: any
): Promise<{ statusCode: number }> => {
  try {
    dispatch({
      type: types.CREATE_ACCOUNT_REQUEST,
    });

    const res: any = await authService.register(email, username, password);

    dispatch({
      type: types.CREATE_ACCOUNT_SUCCESS,
    });

    return {
      statusCode: res.status,
    };
  } catch (e) {
    let errors = [];
    if (typeof e.message === 'string') errors.push(e.message);
    else errors = e.message;

    dispatch({
      type: types.CREATE_ACCOUNT_FAILURE,
      payload: {
        data: errors,
      },
    });
    return {
      statusCode: e.statusCode,
    };
  }
};

export const signOut = () => async (dispatch: any) => {
  await authService.signOut();

  dispatch({
    type: types.SIGN_OUT,
  });
};

export const validateToken = () => async (dispatch: any) => {
  try {
    const decoded: { email: string; iat: number; exp: number } = await authService.decodeToken();

    if (Date.now() >= decoded.exp * 1000 || !localStorage.getItem('accessToken')) {
      localStorage.removeItem('accessToken');
      throw Error();
    }
    if (!decoded) throw Error();

    dispatch({
      type: types.VALIDATE_TOKEN_SUCCESS,
      payload: {
        data: decoded,
      },
    });
  } catch (e) {
    dispatch({
      type: types.VALIDATE_TOKEN_FAILURE,
    });
  }
};

export const clearAuthError = () => (dispatch: any) => {
  dispatch({
    type: types.CLEAR_AUTH_ERROR,
  });
};

export const forgotPassword = (email: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: types.FORGOT_PASSWORD_REQUEST,
    });

    const res: any = await authService.forgotPassword(email);

    dispatch({
      type: types.FORGOT_PASSWORD_SUCCESS,
    });

    return {
      statusCode: res.status,
    };
  } catch (e) {
    let errors = [];
    if (typeof e.message === 'string') errors.push(e.message);
    else errors = e.message;

    dispatch({
      type: types.FORGOT_PASSWORD_FAILURE,
      payload: {
        data: errors,
      },
    });
    return {
      statusCode: e.statusCode,
    };
  }
};

export const resetPassword = (accessToken: string, password: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: types.RESET_PASSWORD_REQUEST,
    });

    const res: any = await authService.resetPassword(accessToken, password);

    dispatch({
      type: types.RESET_PASSWORD_SUCCESS,
    });

    return {
      statusCode: res.status,
    };
  } catch (e) {
    let errors = [];
    if (typeof e.message === 'string') errors.push(e.message);
    else errors = e.message;

    dispatch({
      type: types.RESET_PASSWORD_FAILURE,
      payload: {
        data: errors,
      },
    });
    return {
      statusCode: e.statusCode,
    };
  }
};
