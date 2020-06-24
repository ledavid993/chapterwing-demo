import * as types from '../types/novel.type';
import { novelService } from '../services';

export const fetchPopularNovels = (limit: number, offset: number) => async (dispatch: any) => {
  try {
    dispatch({
      type: types.GET_POPULAR_NOVELS_REQUEST,
    });

    const res = await novelService.getPopularNovels(0, 8);

    dispatch({
      type: types.GET_POPULAR_NOVELS_SUCCESS,
      payload: {
        data: res.data,
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
        data: res.data,
      },
    });
  } catch (e) {
    dispatch({
      type: types.GET_NOVEL_FAILURE,
    });
  }
};

export const fetchNovels = () => async (dispatch: any) => {
  try {
    dispatch({
      type: types.GET_NOVELS_REQUEST,
    });

    const res = await novelService.getNovels('Novel', 12, true, true);

    dispatch({
      type: types.GET_NOVELS_SUCCESS,
      payload: {
        data: res.data,
      },
    });
  } catch (e) {
    dispatch({
      type: types.GET_NOVELS_FAILURE,
      payload: {
        error: JSON.stringify(e),
      },
    });
  }
};

export const clearNovels = () => async (dispatch: any) => {
  dispatch({
    type: types.GET_NOVELS_SUCCESS,
    payload: {
      data: [],
    },
  });
};

export const fetchChapter = (
  novelTitle: string,
  volumeTitle: string,
  chapterNumber: number
) => async (dispatch: any) => {
  try {
    dispatch({
      type: types.GET_NOVEL_REQUEST,
    });

    const res = await novelService.getChapter(novelTitle, volumeTitle, chapterNumber);

    dispatch({
      type: types.GET_CHAPTER_SUCCESS,
      payload: {
        data: res.data,
      },
    });
  } catch (e) {
    dispatch({
      type: types.GET_CHAPTER_FAILURE,
    });
  }
};
