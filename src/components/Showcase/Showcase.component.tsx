import { Box, Grid, Skeleton, Image } from '@chakra-ui/core';
import Link from 'next/link';
import { isEmpty } from 'ramda';
import styles from './Showcase.module.scss';
import { BUNNY_IMAGE_URL } from '../../constants';

interface Props {
  style?: any;
  popularNovels: any[];
}

const Showcase: React.FC<Props> = ({ style, popularNovels }) => {
  return (
    <>
      {!isEmpty(popularNovels) ? (
        <Box className={styles.container} style={style}>
          <div className={styles.heading}>
            <img src="/icons/feather.png" alt="feather" />
            <span>Trending Releases</span>
          </div>
          <Grid className={styles.grid}>
            {popularNovels.map((novel) => (
              <Link href="/novels/[title]" as={`/novels/${novel.title}`}>
                <a>
                  <Image
                    src={`https://chapterwing.b-cdn.net/images/${novel.image}`}
                    className={styles.popularNovels}
                    fallbackSrc="/chapterwing.jpg"
                    alt={novel.title}
                  />
                </a>
              </Link>
            ))}
          </Grid>
        </Box>
      ) : null}
    </>
  );
};

const ShowcaseSkeleton = ({ style }: any) => {
  const skeletonGrid = () => {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(
        <Skeleton
          key={i}
          w="100%"
          maxWidth="80px"
          h="115px"
          my="10px"
          bg="blue.500"
          margin="0 auto"
          borderRadius="5px"
        />
      );
    }
    return arr;
  };

  return (
    <Box className={styles.container} style={style}>
      <div className={styles.heading}>
        <img src="/icons/feather.png" alt="feather" />
        <span>Popular Releases</span>
      </div>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} padding="10px" textAlign="center">
        {skeletonGrid()}
      </Grid>
    </Box>
  );
};

export default Showcase;
