import * as types from '../types/novel.type';

const initialState = {
  novels: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_NOVELS_SUCCESS: {
      console.log(state);
      return {
        ...state,
        novels: action.payload.novels,
        loading: action.payload.loading,
      };
    }
    default:
      return state;
  }
};

export default reducer;
