import { Heading, Box } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import { Layout } from '@components';
import { NovelState } from '@interface/novel.interface';
import { nodesToHtml } from '@utils';
import styles from './Chapter.module.scss';
import { useRouter } from 'next/router';

const Chapter = () => {
  const novelState: NovelState = useSelector(({ novel }: any) => novel);
  const { currentChapter } = novelState;
  const router = useRouter();

  return (
    <Layout>
      <Box className={styles.contentContainer}>
        <Heading display="flex" justifyContent="center" alignItems="center" color="#d3d3d3">
          {router.query.volumeTitle}
        </Heading>
        <Heading color="white" fontSize="1.5rem" marginTop="25px">
          Chapter {currentChapter?.chapterNumber}: {currentChapter?.title}
        </Heading>
        <Box marginTop="60px" />
        <div dangerouslySetInnerHTML={{ __html: nodesToHtml(currentChapter?.document) }} />
      </Box>
    </Layout>
  );
};

export default Chapter;
