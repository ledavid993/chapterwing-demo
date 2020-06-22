import { Box, Divider, Heading, Flex, Image, Button } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  Layout,
  HeroBanner,
  Showcase,
  Header,
  Discussion,
  DiscussionSkeleton,
  Release,
  ReleaseSkeleton,
} from '../../components';
import styles from './Home.module.scss';
import { fetchNovels } from '../../redux/actions/novel.action';
import { NovelState } from '../../interface/novel.interface';

const releases: any[] = [];

const Home = () => {
  const { popularNovels, recommendedNovels }: NovelState = useSelector(({ novel }: any) => novel);
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    dispatch(fetchNovels());
  }, [router.asPath]);

  const navigateToChapterPage = (
    novelTitle: string,
    volumeTitle: string,
    chapterNumber: number
  ) => {
    router.push(`/novels/${novelTitle}/${volumeTitle}/${chapterNumber}`);
  };

  const navigateToNovelPage = (novelTitle: string) => {
    router.push(`/novels/${novelTitle}`);
  };

  const loadingDiscussions = () => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(<DiscussionSkeleton key={i} />);
    }
    return arr;
  };

  const loadingReleases = () => {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(<ReleaseSkeleton key={i} />);
    }
    return arr;
  };

  return (
    <>
      <Head>
        <title>ChapterWing - Homepage</title>
      </Head>
      <Box boxSizing="border-box">
        <Layout>
          <HeroBanner />
          <div className={styles.container}>
            <Showcase popularNovels={popularNovels} />
            <div className={styles.content1}>
              <p>Start hosting your novel on ChapterWing and</p>
              <p>be Discovered.</p>
            </div>
            {/* <Header fontSize="16px">Top Discussions</Header>
            <Box padding="5px">
              {discussions.length !== 0
                ? discussions.map((discussion) => (
                    <Discussion
                      key={discussion.title}
                      title={discussion.title}
                      content={discussion.content}
                      likes={discussion.likes}
                    />
                  ))
                : loadingDiscussions()}
            </Box> */}
            <Divider w="90%" margin="5px auto" borderColor="background.300" />
            <Header fontSize="16px">Recommended Releases</Header>
            <Box padding="5px">
              {recommendedNovels.length !== 0
                ? recommendedNovels.map((novel) => (
                    <Release
                      novel={novel}
                      navigateToNovelPage={navigateToNovelPage}
                      navigateToChapterPage={navigateToChapterPage}
                      key={novel.id}
                    />
                  ))
                : loadingReleases()}
            </Box>
            <Divider w="90%" margin="5px auto" borderColor="background.300" />
            <Box margin="20px">
              <Heading
                size="sm"
                color="white"
                display="flex"
                justifyContent="center"
                margin="15px 0"
              >
                Why Sign up on ChapterWing?
              </Heading>
              <Flex justifyContent="space-around">
                <Box
                  w="80%"
                  color="#d3d3d3"
                  fontWeight="bold"
                  fontSize="14px"
                  className={styles.whysignup}
                >
                  Features to make your reading easier
                  <p>
                    <span>-</span> Bookmark your favorite book in one place
                  </p>
                  <p>
                    <span>-</span> Bookmark your favorite book in one place
                  </p>
                  <p>
                    <span>-</span> Bookmark your favorite book in one place
                  </p>
                </Box>
                <Image src="/icons/read.svg" alt="read" />
              </Flex>
            </Box>
            <Box margin="20px">
              <Flex justifyContent="space-around">
                <Box
                  w="80%"
                  color="#d3d3d3"
                  fontWeight="bold"
                  fontSize="14px"
                  className={styles.whysignup}
                >
                  Start Writing Your Novel
                  <p>
                    <span>-</span> Tools to make your writing easier to manage
                  </p>
                  <p>
                    <span>-</span> Show others your story to thousands
                  </p>
                  {/* <p>
                    <span>-</span> Get pay to write your story
                  </p> */}
                </Box>
                <Image src="/icons/write.svg" alt="write" />
              </Flex>
            </Box>
            <Flex justifyContent="center" margin="15px 0">
              <Button variantColor="primary">Sign Up</Button>
            </Flex>
          </div>
        </Layout>
      </Box>
    </>
  );
};

export default Home;
