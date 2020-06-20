import { Home } from '../containers';
import { wrapper } from '../store';
import { novelService } from '../redux/services';
import * as types from '../redux/types/novel.type';

export default function HomePage() {
  return <Home />;
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, req, ...etc }) => {
  try {
    // const res = await novelService.getPopularNovels(8, 0);

    store.dispatch({
      type: types.GET_POPULAR_NOVELS_SUCCESS,
      payload: {
        data: res.data,
      },
    });

    return {};
  } catch (e) {
    store.dispatch({
      type: types.GET_POPULAR_NOVELS_FAILURE,
      payload: {
        data: JSON.stringify(e) + 'hello',
      },
    });

    return {};
  }
});
