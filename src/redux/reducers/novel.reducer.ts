import * as types from '../types/novel.type';
import { CurrentNovel } from '../../interface/novel.interface';

const initialState: CurrentNovel = {
  popularNovels: [],
  loading: false,
  error: null,
  currentNovel: null,
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
        popularNovels: action.payload.novels,
        loading: false,
      };
    }
    case types.GET_POPULAR_NOVELS_FAILURE: {
      return {
        ...state,
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
    default:
      return state;
  }
};

export default reducer;
