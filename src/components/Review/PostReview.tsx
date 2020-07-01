import { Box, Text, Textarea, Flex } from '@chakra-ui/core';
import { StarRating } from '..';
import styles from './Review.module.scss';
import { useEffect, useState } from 'react';

const PostReview = () => {
  const [stars, setStars] = useState(0);

  const onChange = (value) => {
    setStars(value);
  };

  return (
    <Box
      className={styles.postReviewContainer}
      display="flex"
      fontSize="14px"
      background="#d3d3d3"
      padding="5px 12px"
      borderRadius="2px"
      flexDirection="column"
      margin="15px 0"
    >
      <Flex justifyContent="space-between" alignItems="center" margin="5px 0">
        <Text fontWeight="bold" color="rgba(0,0,0,.7)">
          Rate this novel
        </Text>
        <StarRating
          value={0}
          size={14}
          className={styles.starRating}
          primaryColor="#84B7C7"
          onChange={onChange}
          value={stars}
        />
      </Flex>
      {stars > 0 && <Textarea placeholder="Enter Review Here" resize="none" minHeight="150px" />}
    </Box>
  );
};

export default PostReview;
