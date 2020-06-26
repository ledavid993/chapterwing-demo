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

    const res = await authService.signIn(email, password);

    const decoded = localStorage.getItem('accessToken') || '';

    dispatch({
      type: types.GET_SIGN_IN_SUCCESS,
      payload: {
        data: jwtDecode(decoded),
      },
    });

    return true;
  } catch (e) {
    dispatch({
      type: types.GET_SIGN_IN_FAILURE,
      payload: {
        data: null,
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

    const decoded = await authService.validateToken();

    dispatch({
      type: types.VALIDATE_TOKEN_SUCCESS,
      payload: {
        data: decoded,
      },
    });
  } catch (e) {
    dispatch({
      type: types.VALIDATE_TOKEN_FAILURE,
      payload: {
        data: null,
      },
    });
  }
};
