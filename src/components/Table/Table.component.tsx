import { Box, Flex, Text, Image } from '@chakra-ui/core';
import { Header } from '..';
import { useRouter } from 'next/router';
import styles from './Table.module.scss';
import { ContentsEntity } from '../../interface/novel.interface';
import { isEmpty } from 'ramda';

interface Props {
  name: string;
  chapters: ContentsEntity[];
  onNavigatePage: (chapterNumber: number) => void;
}

const Table: React.FC<Props> = ({ name, chapters, onNavigatePage }) => {
  return (
    <div>
      <Box width="100%" backgroundColor="#c4c4c410">
        <Header fontSize="14px">{name}</Header>
      </Box>
      {!isEmpty(chapters) ? (
        <Box borderLeft="2px solid #d3d3d3" margin="5px" padding="0 10px">
          {chapters.map((chapter) => (
            <TableList
              key={chapter.title}
              chapterNumber={chapter.chapterNumber}
              title={chapter.title}
              likes={chapter.likes}
              navigatePage={() => onNavigatePage(chapter.chapterNumber)}
            />
          ))}
        </Box>
      ) : (
        <Flex
          justifyContent="center"
          alignItems="center"
          margin="20px"
          fontWeight="bold"
          color="#d3d3d3"
        >
          No Chapters Found
        </Flex>
      )}
    </div>
  );
};

const TableList = ({ chapterNumber, title, likes, navigatePage }: any) => (
  <Flex
    justifyContent="space-between"
    padding="10px"
    className={styles.listContainer}
    onClick={() => navigatePage(chapterNumber)}
    borderBottom="1px solid gray"
  >
    <Text color="#d3d3d3" fontSize="13px" fontWeight="bold">
      <span className={styles.chapterTitle}>Chapter {chapterNumber}</span> : {title}
    </Text>
    <Flex alignItems="center" justifyContent="center">
      <Image src="/icons/heart.png" alt="heart" h="22px" w="22px" />
      <Text paddingLeft="5px" color="#d3d3d390" fontSize="12px">
        {likes} Likes
      </Text>
    </Flex>
  </Flex>
);

export default Table;
