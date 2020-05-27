import { Box, Flex, Text, Image } from '@chakra-ui/core';
import { Header } from '..';
import { useRouter } from 'next/router';
import styles from './Table.module.scss';

interface Props {
  name: string;
}

const data = [
  {
    chapter: 1,
    title: 'Redo',
    likes: 5,
  },
  {
    chapter: 2,
    title: 'Redone',
    likes: 5,
  },
  {
    chapter: 3,
    title: 'Redid',
    likes: 99,
  },
];

const Table: React.FC<Props> = ({ name }) => {
  const router = useRouter();
  const navigatePage = (chapter: number) => {
    router.push(`${router.asPath}/${chapter}`);
  };

  return (
    <div>
      <Box width="100%" backgroundColor="#c4c4c410">
        <Header fontSize="14px">{name}</Header>
      </Box>
      <Box borderLeft="2px solid #d3d3d3" margin="5px" padding="0 10px">
        {data.map((d) => (
          <TableList
            key={d.title}
            number={d.chapter}
            title={d.title}
            likes={d.likes}
            navigatePage={navigatePage}
          />
        ))}
      </Box>
    </div>
  );
};

const TableList = ({ chapter, title, likes, navigatePage }: any) => (
  <Flex
    justifyContent="space-between"
    padding="10px"
    className={styles.listContainer}
    onClick={() => navigatePage(chapter)}
  >
    <Text color="#d3d3d3" fontSize="13px" fontWeight="bold">
      Chapter {chapter}: {title}
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
