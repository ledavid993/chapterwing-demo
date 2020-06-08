import * as types from '../types/novel.type';

const initialState = {
  popularNovels: [],
  loading: false,
  error: null,
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
    default:
      return state;
  }
};

export default reducer;
