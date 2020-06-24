import * as types from '../types/novel.type';
import { CurrentNovel } from '../../interface/novel.interface';

const initialState: CurrentNovel = {
  popularNovels: [],
  recommendedNovels: [],
  loading: false,
  error: null,
  currentNovel: null,
  currentChapter: null,
  novelsError: 'err',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_POPULAR_NOVELS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_POPULAR_NOVELS_SUCCESS: {
      return {
        ...state,
        popularNovels: action.payload.data,
        loading: false,
      };
    }
    case types.GET_POPULAR_NOVELS_FAILURE: {
      return {
        ...state,
        error: action.payload.data,
        loading: false,
      };
    }
    case types.GET_NOVEL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_NOVEL_SUCCESS: {
      return {
        ...state,
        currentNovel: action.payload.data,
        loading: false,
      };
    }
    case types.GET_NOVEL_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case types.GET_NOVELS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_NOVELS_SUCCESS: {
      return {
        ...state,
        recommendedNovels: action.payload.data,
        novelsError: action.payload.error,
        loading: false,
      };
    }
    case types.GET_NOVELS_FAILURE: {
      return {
        ...state,
        loading: false,
        novelsError: action.payload.error,
      };
    }
    case types.GET_CHAPTER_SUCCESS: {
      return {
        ...state,
        currentChapter: action.payload.data,
        loading: false,
      };
    }
    case types.GET_CHAPTER_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
