import { Heading, Box, Text, Flex, Button } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import { Layout } from '@components';
import { NovelState } from '@interface/novel.interface';
import { nodesToHtml } from '@utils';
import styles from './Chapter.module.scss';
import { useRouter } from 'next/router';
import { navigateToChapterPage } from '../../utils/navigate';

const Chapter = () => {
  const novelState: NovelState = useSelector(({ novel }: any) => novel);
  const { currentChapter } = novelState;
  const router = useRouter();

  const onNavigateChapter = (change: number) => {
    navigateToChapterPage(
      router,
      '/novels',
      router.query.novel,
      currentChapter.chapterNumber + change
    );
  };

  return (
    <Layout>
      <Box className={styles.contentContainer}>
        <Heading
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="#d3d3d3"
          className={styles.volumeHeader}
        >
          {currentChapter.task.title}
        </Heading>
        <Heading color="white" fontSize="1.5rem" marginTop="25px">
          <span>Chapter {currentChapter?.chapterNumber}:</span>
          <div>{currentChapter?.title}</div>
        </Heading>
        <Box marginTop="60px" />
        <div dangerouslySetInnerHTML={{ __html: nodesToHtml(currentChapter?.document) }} />
        <Flex justifyContent="space-between" marginTop="10px">
          <Button
            isDisabled={currentChapter.chapterNumber <= 1}
            onClick={() => onNavigateChapter(-1)}
          >
            Prev
          </Button>
          <Button onClick={() => onNavigateChapter(1)}>Next</Button>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Chapter;
