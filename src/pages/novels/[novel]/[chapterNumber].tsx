import { Chapter } from '@containers';
import { wrapper } from '../../../store';
import { novelService } from '@redux/services';
import withErrors from '../../../helpers/withError';
import * as types from '@redux/types/novel.type';

export default function NovelPage({ statusCode }: any) {
  const ChapterWithErrors = withErrors(statusCode, Chapter);
  return <ChapterWithErrors />;
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, req, query }: any) => {
  try {
    const res = await novelService.getChapter(query.novel, query.chapterNumber);

    const updatedRes = {
      ...res,
      data: {
        ...res.data,
        document: res.data.document,
      },
    };

    store.dispatch({
      type: types.GET_CHAPTER_SUCCESS,
      payload: {
        data: updatedRes.data,
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
