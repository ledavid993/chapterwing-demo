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

export const signOut = () => async (dispatch: any) => {
  await authService.signOut();

  dispatch({
    type: types.SIGN_OUT,
  });
};

export const register = (email: string, password: string) => async (
  dispatch: any
): Promise<boolean> => {
  try {
    dispatch({
      type: types.GET_SIGN_IN_REQUEST,
    });

    await authService.register(email, password);

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

export const validateToken = () => async (dispatch: any) => {
  try {
    dispatch({
      type: types.VALIDATE_TOKEN_REQUEST,
    });

    authService.loadToken();
    const decoded: { email: string; iat: number; exp: number } = authService.decodeToken();

    console.log(Date.now() >= decoded.exp * 1000);

    if (Date.now() >= decoded.exp * 1000) {
      localStorage.removeItem('accessToken');
    }

    dispatch({
      type: types.VALIDATE_TOKEN_SUCCESS,
      payload: {
        data: decoded,
      },
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: types.VALIDATE_TOKEN_FAILURE,
      payload: {
        data: null,
      },
    });
  }
};
