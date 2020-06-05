import * as types from '../types/novel.type';
import { novelService } from '../services';

export const fetchNovels = () => async (dispatch: any) => {
  try {
    const res = await novelService.getNovels();

    dispatch({
      type: types.GET_NOVELS_SUCCESS,
      payload: {
        novels: res.data,
        loading: false,
      },
    });
  } catch (e) {
    dispatch({
      type: types.GET_NOVELS_FAILURE,
      payload: {
        loading: false,
      },
    });
  }
};
