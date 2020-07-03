import { Box, Image, Heading, Text, SimpleGrid, Divider, Flex, Spinner } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout, Header, Table, Review, Genres, Tags } from '@components';
import styles from './Novel.module.scss';
import { NovelState } from '@interface/novel.interface';
import { isEmpty } from 'ramda';
import { useEffect, useState } from 'react';
import { fetchReviews, postReview } from '@redux/actions/novel.action';
import { navigateToChapterPage } from '@utils/navigate';

export default function Novel() {
  const { novel: novelState, auth }: { novel: NovelState; auth: any } = useSelector(
    (state: any) => state
  );
  const {
    loading,
    reviews,
    currentNovel: { novel, volumes },
  } = novelState;
  const { user } = auth;
  const { title, author, createdDate, rating, image, description } = novel;
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(6);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchReviews(novel.id, offset, limit));
  }, [router]);

  const onNavigateToChapterPage = (chapterNumber: number) => {
    navigateToChapterPage(router, '/novels', router.query.novel, chapterNumber);
  };

  const onReviewSubmit = (
    text: string,
    rating: number
  ): Promise<{ success: boolean; statusCode?: number }> => {
    return dispatch(postReview(novel.id, { text, rating }));
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name={title} content={description} />
      </Head>
      <Box className={styles.imageBanner}>
        <div className={styles.shade} />
        <Image src="/wood.webp" h="100%" w="100%" alt="background" fallbackSrc="/wood.jpg" />
        <div className={styles.stack}>
          <div className={styles.paper} />
          <div className={styles.paper} />
          <div className={styles.paper} />
          <div className={styles.paper} />
          <div className={styles.paper}>
            {
              <Image
                src={`https://chapterwing.b-cdn.net/images/${novel.image}`}
                h="100%"
                w="100%"
                borderRadius="5px"
                border="1px solid rgba(122,122,122)"
                alt="novel"
                fallbackSrc="/chapterwing.jpg"
              />
            }
          </div>
        </div>
      </Box>
      <div className={styles.novelBody}>
        <Heading size="md" color="#d3d3d3" margin="15px 0" textDecoration="underline">
          {novel.title}
        </Heading>
        <Text marginTop="5%" whiteSpace="pre-line" color="white" fontSize="12px" lineHeight=".9rem">
          {novel.description}
        </Text>
        <Genres genres={novel.genres} />
        <Tags tags={novel.tags} />
        <SimpleGrid className={styles.extraInfo}>
          <Box>
            Released:{' '}
            <span className={styles.labelInfo}>{dayjs(createdDate).format('MM/DD/YYYY')}</span>
          </Box>
          <Box>
            Language: <span className={styles.labelInfo}>English</span>
          </Box>
          <Box>
            Author: <span className={styles.labelInfo}>{author || '---'}</span>
          </Box>
          <Box>
            Public Rating: <span className={styles.labelInfo}>{rating || '---'}</span>
          </Box>
          {JSON.stringify(auth, null, 4)}
        </SimpleGrid>
        {!isEmpty(volumes) ? (
          volumes?.map((volume) => (
            <Table
              key={volume.title}
              name={`Volume ${volume.number} - ${volume.title}`}
              chapters={volume.contents}
              onNavigatePage={onNavigateToChapterPage}
            />
          ))
        ) : (
          <Flex
            justifyContent="center"
            alignItems="center"
            margin="20px"
            fontWeight="bold"
            color="#d3d3d3"
          >
            No Volumes Found
          </Flex>
        )}
        <Divider w="90%" margin="30px auto" borderColor="background.300" />
        <Box>
          <Header fontSize="14px">Reviews</Header>
          {!loading ? (
            <Review
              reviews={reviews.results}
              count={reviews.count}
              onReviewSubmit={onReviewSubmit}
              isAuth={user || false}
            />
          ) : (
            <Flex justifyContent="center" alignItems="center">
              <Spinner size="lg" />
            </Flex>
          )}
        </Box>
        {/* <Box>
          <Header fontSize="14px">Discussions</Header>
          <Discussion title="" content="" likes={0} />
        </Box> */}
      </div>
    </Layout>
  );
}
