import { Heading, Box, Image, Flex, Button } from '@chakra-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from '@components';
import { NovelState } from '@interface/novel.interface';
import { nodesToHtml } from '@utils';
import styles from './Chapter.module.scss';
import { useRouter } from 'next/router';
import { navigateToChapterPage } from '../../utils/navigate';
import { likeChapter } from '@redux/actions/novel.action';
import { contains } from 'ramda';
import { useState, useEffect } from 'react';

const Chapter = () => {
  const { novel, auth }: any = useSelector((state) => state);
  const { currentChapter }: NovelState = novel;
  const { user } = auth;
  const [hasLike, setHasLike] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setHasLike(contains(user.email, currentChapter.userEmailLiked));
    }
  }, [auth]);

  const onNavigateChapter = (change: number) => {
    navigateToChapterPage(
      router,
      '/novels',
      router.query.novel,
      currentChapter.chapterNumber + change
    );
  };

  const onLikeChapter = () => {
    if (!hasLike) dispatch(likeChapter(currentChapter.id));
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
        <Flex justifyContent="space-between" marginTop="60px">
          <Button
            isDisabled={currentChapter.chapterNumber <= 1}
            onClick={() => onNavigateChapter(-1)}
          >
            Prev
          </Button>
          <Button
            variant={hasLike ? 'solid' : 'outline'}
            borderRadius="50%"
            h="60px"
            w="60px"
            variantColor="primary"
            isDisabled={!user}
            onClick={() => onLikeChapter()}
            position="relative"
            bottom="10px"
          >
            <Image src="/icons/heart.png" alt="heart" w="20px" h="20px" />
          </Button>
          <Button
            isDisabled={currentChapter.chapterNumber === currentChapter.count}
            onClick={() => onNavigateChapter(1)}
          >
            Next
          </Button>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Chapter;
