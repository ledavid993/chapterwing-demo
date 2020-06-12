import { Home } from '../containers';
import { fetchPopularNovels } from '../redux/actions/novel.action';
import { wrapper } from '../store';
import { novelService } from '../redux/services';
import * as types from '../redux/types/novel.type';

export default function HomePage() {
  return <Home />;
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, req, ...etc }) => {
  const res = await novelService.getNovels();

  store.dispatch({
    type: types.GET_POPULAR_NOVELS_SUCCESS,
    payload: {
      novels: res.data,
    },
  });
});
