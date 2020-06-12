import * as types from '../types/novel.type';
import { novelService } from '../services';

export const fetchPopularNovels = () => async (dispatch: any) => {
  try {
    dispatch({
      type: types.GET_POPULAR_NOVELS_REQUEST,
    });

    const res = await novelService.getNovels();

    dispatch({
      type: types.GET_POPULAR_NOVELS_SUCCESS,
      payload: {
        novels: res.data,
      },
    });
  } catch (e) {
    dispatch({
      type: types.GET_POPULAR_NOVELS_FAILURE,
    });
  }
};

export const fetchNovel = (novelTitle: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: types.GET_NOVEL_REQUEST,
    });

    const res = await novelService.getNovel(novelTitle);

    dispatch({
      type: types.GET_NOVEL_SUCCESS,
      payload: {
        novel: res.data,
      },
    });
  } catch (e) {
    dispatch({
      type: types.GET_NOVEL_FAILURE,
    });
  }
};
