import * as types from '../types/novel.type';
import { novelService } from '../services';

export const fetchPopularNovels = (limit: number, offset: number) => async (dispatch: any) => {
  try {
    dispatch({
      type: types.GET_POPULAR_NOVELS_REQUEST,
    });

    const res = await novelService.getPopularNovels(0, 8);

    console.log(res);

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

export const fetchNovels = (params: { offset: number; limit: number; search?: string }) => async (
  dispatch: any
) => {
  try {
    dispatch({
      type: types.GET_NOVELS_REQUEST,
    });

    const res = await novelService.getNovels(params);

    dispatch({
      type: types.GET_NOVELS_SUCCESS,
      payload: {
        data: res.data,
      },
    });
  } catch (e) {
    dispatch({
      type: types.GET_NOVELS_FAILURE,
    });
  }
};

export const fetchReviews = (novelId: string, offset: number, limit: number) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch({
      type: types.GET_REVIEWS_REQUEST,
    });

    const {
      novel: {
        reviews: { results },
      },
    } = getState();

    const res = await novelService.getReviews(novelId, offset, limit);

    const updateReview = res.data.results.length !== 0 ? results.concat(res.data.results) : results;

    dispatch({
      type: types.GET_REVIEWS_SUCCESS,
      payload: {
        count: res.data.count,
        results: updateReview,
      },
    });
  } catch (e) {
    dispatch({
      type: types.GET_REVIEWS_FAILURE,
    });
  }
};

export const likeChapter = (chapterId: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: types.LIKE_CHAPTER_REQUEST,
    });

    await novelService.likeChapter(chapterId);

    dispatch({
      type: types.LIKE_CHAPTER_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: types.LIKE_CHAPTER_FAILURE,
    });
  }
};

export const postReview = (
  novelId: string,
  data: { text: string; rating: number }
): Promise<boolean> => async (dispatch: any) => {
  try {
    dispatch({
      type: types.POST_REVIEW_REQUEST,
    });
    const res = await novelService.postReview(novelId, data);
    dispatch({
      type: types.POST_REVIEW_SUCCESS,
    });
    return {
      success: true,
      statusCode: null,
    };
  } catch (e) {
    dispatch({
      type: types.POST_REVIEW_FAILURE,
    });
    return {
      success: false,
      statusCode: e.statusCode,
    };
  }
};
