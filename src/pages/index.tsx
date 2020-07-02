import { Home } from '../containers';
import { wrapper } from '../store';
import { novelService } from '../redux/services';
import * as types from '../redux/types/novel.type';
import { camelizeKeys } from 'humps';

export default function HomePage() {
  return <Home />;
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, req, ...etc }) => {
  try {
    const res = await Promise.all([
      novelService.getPopularNovels(8, 0),
      novelService.getRecommendedNovels('Novel', 12, true),
    ]);

    store.dispatch({
      type: types.GET_POPULAR_NOVELS_SUCCESS,
      payload: {
        data: camelizeKeys(res[0].data),
      },
    });

    store.dispatch({
      type: types.GET_RECOMMENDED_NOVELS_SUCCESS,
      payload: {
        data: camelizeKeys(res[1].data),
      },
    });

    return {};
  } catch (e) {
    store.dispatch({
      type: types.GET_POPULAR_NOVELS_FAILURE,
      payload: {
        data: 'Popular Novels Failed on server side',
      },
    });

    return {};
  }
});
