import { Text, Heading, Box } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import { Layout } from '../../components';
import { ContentsEntity, NovelState } from '../../interface/novel.interface';
import { nodesToHtml } from '../../utils';
import styles from './Chapter.module.scss';

const Chapter = () => {
  const novelState: NovelState = useSelector(({ novel }: any) => novel);
  const {
    currentChapter: { title, document, chapterNumber },
  } = novelState;

  return (
    <Layout>
      <Box padding="10px" marginTop="25px" className={styles.contentContainer}>
        <Heading color="white" fontSize="1.5rem">
          Chapter {chapterNumber}: {title}
        </Heading>

        {nodesToHtml(document)}
      </Box>
    </Layout>
  );
};

export default Chapter;
