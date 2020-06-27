import { Box, Flex, Image, Heading, Text } from '@chakra-ui/core';
import dayjs from 'dayjs';
import styles from './NovelList.module.scss';
import { BUNNY_IMAGE_URL } from '../../constants';

const NovelList = ({ novel }: any) => {
  return (
    <Box background="rgba(0,0,0,.1)" margin="5px 0" borderRadius="3px">
      <Flex className={styles.innerContainer}>
        <Box>
          <Image fallbackSrc="/chapterwing.jpg" src={`${BUNNY_IMAGE_URL}/${novel.image}`} />
        </Box>
        <Box
          position="relative"
          width="100%"
          boxSizing="border-box"
          background="rgba(0,0,0,.2)"
          padding="5px"
        >
          <Box
            background="rgba(211,211,211,.3)"
            padding="3px 8px"
            borderRadius="5px"
            textAlign="left"
            lineHeight="1.1"
          >
            <Text color="#d3d3d3" display="inline" fontSize="14px" fontWeight="bold">
              {novel.title}
            </Text>
          </Box>
          <Box className={styles.detail} fontSize="12px" margin="4px 2px" padding="7px 0">
            <Text>
              <span className={styles.label}>By:</span> {novel.author || '-'}
            </Text>
            <Text>
              <span className={styles.label}>Chapters:</span> {novel.chaptercount}
            </Text>
            <Text>
              <span className={styles.label}>Rating:</span> {novel.rating}
            </Text>
            <Text>
              <span className={styles.label}>Last Update:</span>{' '}
              {dayjs(novel.updatedDate).format('MM/DD/YYYY')}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default NovelList;
