import { Chapter } from '../../../containers';
import { wrapper } from '../../../store';
import { novelService } from '../../../redux/services';
import * as types from '../../../redux/types/novel.type';

export default function NovelPage() {
  return <Chapter />;
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
  } catch (e) {
    // REDIRECT TO 404 PAGE
  }
});
