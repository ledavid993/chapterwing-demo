import { Box, Flex, Image, Divider, Text, Skeleton } from '@chakra-ui/core';
import styles from './Release.module.scss';
import { BUNNY_IMAGE_URL } from '../../constants';

interface Props {
  novel: any;
  navigateToChapterPage: (novelTitle: string, volumeTitle: string, chapterNumber: number) => void;
}

const Release: React.FC<Props> = ({ novel, navigateToChapterPage }) => {
  return (
    <Box w="100%" className={styles.container}>
      <Flex alignItems="center" height="100%">
        <Image
          src={`${BUNNY_IMAGE_URL}/${novel.image}`}
          className={styles.imageCover}
          alt="novel"
        />
        <Flex flexDirection="column" justifyContent="center" padding="0 15px" width="100%">
          {novel.tasks
            .slice(-1)[0]
            .contents.slice(0, 2)
            .map((chapter: any, index: number) => {
              const chapterComponent = (
                <div
                  className={styles.volumeContainer}
                  onClick={() =>
                    navigateToChapterPage(
                      novel.title,
                      novel.tasks.slice(-1)[0].title,
                      chapter.chapterNumber
                    )
                  }
                >
                  <div className={styles.volumeTitle}>
                    Volume - "<h4>{novel.tasks.slice(-1)[0].title}</h4>"
                  </div>
                  <Chapter
                    likes={chapter.likes}
                    title={chapter.title}
                    chapterNumber={chapter.chapterNumber}
                  />
                </div>
              );

              return index !== 0 ? (
                <>
                  <Divider borderColor="background.300" />
                  {chapterComponent}
                </>
              ) : (
                chapterComponent
              );
            })}
        </Flex>
      </Flex>
      <Flex alignItems="center" height="30px" justifyContent="space-between" margin="8px 0">
        <Box display="flex" flexDirection="column">
          <Text className={styles.footerContainer} color="#d3d3d3">
            {novel.title}
          </Text>
          <Text className={styles.footerContainer} color="#d3d3d380">
            {novel.author}
          </Text>
        </Box>
        <Image src="/icons/overflowmenu.svg" />
      </Flex>
    </Box>
  );
};

const Chapter = ({ likes, title, chapterNumber }: any) => (
  <Box display="flex" justifyContent="space-between">
    <Text className={styles.chapterLabel}>
      Chapter {chapterNumber}: {title}
    </Text>
    <Box display="flex" width="30%" justifyContent="flex-end">
      <Image src="/icons/heart.png" alt="heart" w="20px" h="20px" />
      <span>{likes} Likes</span>
    </Box>
  </Box>
);

export const ReleaseSkeleton = () => {
  return (
    <Box
      w="100%"
      className={styles.container}
      padding="15px"
      paddingBottom="5px"
      boxSizing="border-box"
    >
      <Flex alignItems="center" height="100%">
        <Skeleton>
          <Box height="80px" width="54px" />
        </Skeleton>
        <Flex flexDirection="column" justifyContent="center" padding="0 15px" width="100%">
          <ChapterSkeleton />
          <Divider borderColor="background.300" />
          <ChapterSkeleton />
        </Flex>
      </Flex>
      <Flex alignItems="center" height="30px" justifyContent="space-between" margin="8px 0">
        <Box display="flex" flexDirection="column">
          <Skeleton h="10px" marginBottom="10px">
            <div>Second Coming</div>
          </Skeleton>
          <Skeleton h="10px">
            <div>Second Coming</div>
          </Skeleton>
        </Box>
        <Image src="/icons/overflowmenu.svg" alt="overflowmenu" />
      </Flex>
    </Box>
  );
};

const ChapterSkeleton = () => (
  <Box display="flex" justifyContent="space-between">
    <Skeleton w="100%">Hello</Skeleton>
  </Box>
);

export default Release;
