import { Box, Text, Skeleton, Flex } from '@chakra-ui/core';
import { ellipsisString } from '../../utils';
import styles from './Discussion.module.scss';
import { TiMessages } from 'react-icons/ti';
import { isEmpty } from 'ramda';

interface Props {
  title: string;
  content: string;
  likes: number;
}

const Discussion: React.FC<Props> = ({ title = '', content = '', likes }) => {
  return (
    <>
      {!isEmpty(content) ? (
        <div className={styles.container}>
          <div className={styles.number}>{likes}</div>
          <div className={styles.content}>
            <h4>{ellipsisString(50, title)}</h4>
            <p>{ellipsisString(150, content)}</p>
          </div>
        </div>
      ) : (
        <DiscussionEmpty />
      )}
    </>
  );
};

export const DiscussionSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton className={styles.number}></Skeleton>
      <div className={styles.content} style={{ width: '100%' }}>
        <h4>
          <Skeleton marginBottom="5px">Title</Skeleton>
        </h4>
        <div>
          <Skeleton w="100%" h="15px" />
        </div>
      </div>
    </div>
  );
};

const DiscussionEmpty = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Box background="#84b7c7" borderRadius="50%" display="inline-block" padding="20px" border="7px solid #0f4759">
        <TiMessages size="7em" color="white" />
      </Box>
      <Text color="#d3d3d3" fontWeight="bold" margin="16px 0">
        Nobody has posted a discussion yet
      </Text>
    </Flex>
  );
};

export default Discussion;
