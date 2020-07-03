import { Novel } from '../../containers';
import { wrapper } from '../../store';
import { novelService } from '../../redux/services';
import * as types from '../../redux/types/novel.type';
import withErrors from '../../helpers/withError';

export default function NovelPage({ statusCode }: any) {
  const NovelWithErrors = withErrors(statusCode, Novel);
  return <NovelWithErrors />;
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, req, query }: any) => {
  try {
    const res = await novelService.getNovel(query.novel);

    store.dispatch({
      type: types.GET_NOVEL_SUCCESS,
      payload: {
        data: res.data,
      },
    });
    return {
      props: { statusCode: 200 },
    };
  } catch (e) {
    return {
      props: { statusCode: e.statusCode ? e.statusCode : 500 },
    };
  }
});
