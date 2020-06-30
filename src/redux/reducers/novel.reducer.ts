import * as types from '../types/novel.type';
import { CurrentNovel } from '../../interface/novel.interface';

const initialState: CurrentNovel = {
  popularNovels: [],
  recommendedNovels: [],
  library: { count: 0, results: [] },
  reviews: [],
  loading: false,
  error: null,
  currentNovel: null,
  currentChapter: null,
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
    case types.GET_RECOMMENDED_NOVELS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_RECOMMENDED_NOVELS_SUCCESS: {
      return {
        ...state,
        recommendedNovels: action.payload.data,
        loading: false,
      };
    }
    case types.GET_RECOMMENDED_NOVELS_FAILURE: {
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
        library: action.payload.data,
        loading: false,
      };
    }
    case types.GET_NOVELS_FAILURE: {
      return {
        ...state,
        loading: false,
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
    case types.GET_REVIEWS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_REVIEWS_SUCCESS: {
      return {
        ...state,
        reviews: action.payload.data,
        loading: false,
      };
    }
    case types.GET_REVIEWS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case types.POST_REVIEW_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case types.POST_REVIEW_SUCCESS: {
      return {
        ...state,
        pending: false,
      };
    }
    case types.POST_REVIEW_FAILURE: {
      return {
        ...state,
        pending: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
