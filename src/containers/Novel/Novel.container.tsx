import { Box, Image, Heading, Text, SimpleGrid, Divider, Flex } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout, Header, Table, Review, Discussion, Genres, Tags } from '@components';
import styles from './Novel.module.scss';
import { NovelState } from '@interface/novel.interface';
import { isEmpty } from 'ramda';

export default function Novel() {
  const novelState: NovelState = useSelector(({ novel }: any) => novel);
  const {
    currentNovel: { novel, volumes },
  } = novelState;
  const { title, author, createdDate, rating, image, description } = novel;

  const router = useRouter();
  const navigatePage = (volumeTitle: string, chapter: number) => {
    router.push(`${router.asPath}/${volumeTitle}/${chapter}`);
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
          <Box>
            Feathermeter: <span className={styles.labelInfo}>---</span>
          </Box>
        </SimpleGrid>
        {!isEmpty(volumes) ? (
          volumes?.map((volume, index) => (
            <Table
              key={volume.title}
              name={`Volume ${index + 1} - ${volume.title}`}
              chapters={volume.contents}
              volumeTitle={volume.title}
              onNavigatePage={navigatePage}
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
          <Review />
        </Box>
        <Box>
          <Header fontSize="14px">Discussions</Header>
          <Discussion title="" content="" likes={0} />
        </Box>
      </div>
    </Layout>
  );
}
