import { Chapter } from '../../../../containers';
import { wrapper } from '../../../../store';
import { novelService } from '../../../../redux/services';
import * as types from '../../../../redux/types/novel.type';

export default function NovelPage() {
  return <Chapter />;
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, req, query }: any) => {
  const res = await novelService.getChapter(query.novel, query.volumeTitle, query.chapterNumber);

  const updatedRes = {
    ...res,
    data: {
      ...res.data,
      document: JSON.parse(res.data.document),
    },
  };

  store.dispatch({
    type: types.GET_CHAPTER_SUCCESS,
    payload: {
      data: res.data,
    },
  });
});
