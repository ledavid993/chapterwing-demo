import { Box, Flex, Image, Divider, Text, Skeleton } from '@chakra-ui/core';
import styles from './Release.module.scss';

const chapters = [
  {
    number: 2,
    title: "Heaven's Brigrade",
    likes: '0',
  },
  {
    number: 3,
    title: "Heaven's Brigrade",
    likes: '0',
  },
];

interface Props {
  novel: any;
}

const Release: React.FC<Props> = ({ novel }) => {
  return (
    <Box w="100%" className={styles.container}>
      <Flex alignItems="center" height="100%">
        <Image
          src="https://cdn.novelupdates.com/imgmid/series_18089.jpg"
          alt="novel"
          w="54px"
          borderRadius="5px"
        />
        <Flex flexDirection="column" justifyContent="center" padding="0 15px" width="100%">
          {novel.chapters.map((chapter: any, index: number) => {
            const chapterComponent = (
              <Chapter likes={chapter.likes} title={chapter.title} number={chapter.number} />
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
          <Text fontSize="10px" fontWeight="bold" color="#d3d3d3">
            {novel.title}
          </Text>
          <Text fontSize="10px" fontWeight="bold" color="#d3d3d390">
            {novel.author}
          </Text>
        </Box>
        <Image src="/icons/overflowmenu.svg" />
      </Flex>
    </Box>
  );
};

const Chapter = ({ likes, title, chapter }: any) => (
  <Box display="flex" justifyContent="space-between">
    <Text color="#d3d3d3" fontSize="12px" width="70%">
      Chapter {chapter}: {title}
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
