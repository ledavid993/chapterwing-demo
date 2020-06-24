import { Text, Heading, Box } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import { Layout } from '../../components';
import { ContentsEntity, NovelState } from '../../interface/novel.interface';
import InnerHTML from 'dangerously-set-inner-html';
import { nodesToHtml } from '../../utils';
import styles from './Chapter.module.scss';

const Chapter = () => {
  const novelState: NovelState = useSelector(({ novel }: any) => novel);
  const { currentChapter } = novelState;

  return (
    <Layout>
      <Box className={styles.contentContainer}>
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
