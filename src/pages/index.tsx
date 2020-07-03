import { Home } from '../containers';
import { wrapper } from '../store';
import { novelService } from '../redux/services';
import * as types from '../redux/types/novel.type';
import { camelizeKeys } from 'humps';
import withErrors from '../helpers/withError';

export default function HomePage({ statusCode }: any) {
  const HomeWithErrors = withErrors(statusCode, Home);
  return <HomeWithErrors />;
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

    return {
      props: { statusCode: 200 },
    };
  } catch (e) {
    return {
      props: { statusCode: e.statusCode },
    };
  }
});
